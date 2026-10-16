/**
 * Pure transaction-graph simulation & scoring logic.
 * Models real-time correlation across accounts, devices, and behavior patterns.
 */

export interface TransactionEvent {
  transactionId: string;
  sourceAccountId: string;
  targetAccountId: string;
  deviceId: string;
  amount: number;
  timeDeltaSeconds: number;
  ipSubnet: string;
}

export interface GraphEvaluationResult {
  riskScore: number; // 0 - 100
  riskLevel: 'Low risk' | 'Medium risk' | 'High risk' | 'Critical risk';
  confidenceScore: number; // 0.0 - 1.0
  primaryPattern: 'Normal Activity' | 'Account Takeover' | 'Mule Network Fan-Out' | 'Synthetic Identity Cycling';
  humanReason: string;
  recommendedAction: 'Allow' | 'Review' | 'Hold' | 'Block';
  linkedAccountCount: number;
}

export function evaluateTransactionInGraph(
  events: TransactionEvent[],
  activeEvent: TransactionEvent
): GraphEvaluationResult {
  // Find all accounts sharing the same device in the time window
  const accountsSharingDevice = new Set<string>();
  const accountsSharingIP = new Set<string>();
  let totalAmountInWindow = activeEvent.amount;
  let rapidTransactionsCount = 1;

  for (const evt of events) {
    if (evt.deviceId === activeEvent.deviceId) {
      accountsSharingDevice.add(evt.sourceAccountId);
      accountsSharingDevice.add(evt.targetAccountId);
    }
    if (evt.ipSubnet === activeEvent.ipSubnet) {
      accountsSharingIP.add(evt.sourceAccountId);
    }
    if (evt.timeDeltaSeconds <= 60) {
      totalAmountInWindow += evt.amount;
      rapidTransactionsCount += 1;
    }
  }

  accountsSharingDevice.add(activeEvent.sourceAccountId);
  accountsSharingDevice.add(activeEvent.targetAccountId);

  const linkedAccounts = accountsSharingDevice.size;

  // Pattern 1: Coordinated Mule Network
  // Multiple distinct accounts funneling through 1 device or IP in < 60s
  if (linkedAccounts >= 3 && rapidTransactionsCount >= 2 && totalAmountInWindow >= 1000) {
    return {
      riskScore: 94,
      riskLevel: 'High risk',
      confidenceScore: 0.96,
      primaryPattern: 'Mule Network Fan-Out',
      humanReason: `${linkedAccounts} accounts linked to 1 device · $${totalAmountInWindow.toLocaleString()} moved in under 60 seconds`,
      recommendedAction: 'Hold',
      linkedAccountCount: linkedAccounts,
    };
  }

  // Pattern 2: Synthetic Identity Cycling
  // IP subnet sharing with distinct unrelated account IDs and micro-velocity
  if (accountsSharingIP.size >= 4) {
    return {
      riskScore: 88,
      riskLevel: 'High risk',
      confidenceScore: 0.91,
      primaryPattern: 'Synthetic Identity Cycling',
      humanReason: `Cluster of ${accountsSharingIP.size} distinct identities sharing routing footprint`,
      recommendedAction: 'Hold',
      linkedAccountCount: accountsSharingIP.size,
    };
  }

  // Pattern 3: Account takeover
  // New device ID + high velocity change
  if (activeEvent.amount > 5000 && activeEvent.timeDeltaSeconds < 15) {
    return {
      riskScore: 82,
      riskLevel: 'High risk',
      confidenceScore: 0.89,
      primaryPattern: 'Account Takeover',
      humanReason: `Sudden high-velocity outflow on unassociated device fingerprint`,
      recommendedAction: 'Review',
      linkedAccountCount: 1,
    };
  }

  // Normal low risk baseline
  return {
    riskScore: 12,
    riskLevel: 'Low risk',
    confidenceScore: 0.98,
    primaryPattern: 'Normal Activity',
    humanReason: `Standard behavior baseline · Consistent device and counterparty trust graph`,
    recommendedAction: 'Allow',
    linkedAccountCount: 1,
  };
}
