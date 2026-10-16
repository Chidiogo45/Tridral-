import test from 'node:test';
import assert from 'node:assert/strict';
import { evaluateTransactionInGraph, type TransactionEvent } from './graphEngine.ts';

test('flags coordinated mule network when multiple accounts share 1 device within short window', () => {
  const events: TransactionEvent[] = [
    {
      transactionId: 'tx_01',
      sourceAccountId: 'acc_alice',
      targetAccountId: 'acc_vault',
      deviceId: 'dev_mule_shared',
      amount: 800,
      timeDeltaSeconds: 15,
      ipSubnet: '198.51.100.0/24',
    },
    {
      transactionId: 'tx_02',
      sourceAccountId: 'acc_bob',
      targetAccountId: 'acc_vault',
      deviceId: 'dev_mule_shared',
      amount: 900,
      timeDeltaSeconds: 30,
      ipSubnet: '198.51.100.0/24',
    },
  ];

  const activeEvent: TransactionEvent = {
    transactionId: 'tx_03',
    sourceAccountId: 'acc_charlie',
    targetAccountId: 'acc_vault',
    deviceId: 'dev_mule_shared',
    amount: 700,
    timeDeltaSeconds: 40,
    ipSubnet: '198.51.100.0/24',
  };

  const result = evaluateTransactionInGraph(events, activeEvent);

  assert.equal(result.riskLevel, 'High risk');
  assert.equal(result.primaryPattern, 'Mule Network Fan-Out');
  assert.equal(result.recommendedAction, 'Hold');
  assert.ok(result.riskScore >= 90);
  assert.ok(result.humanReason.includes('accounts linked to 1 device'));
});

test('allows normal transactions with clean history', () => {
  const events: TransactionEvent[] = [];
  const activeEvent: TransactionEvent = {
    transactionId: 'tx_norm',
    sourceAccountId: 'acc_valid_user',
    targetAccountId: 'acc_trusted_merchant',
    deviceId: 'dev_known_iphone',
    amount: 85,
    timeDeltaSeconds: 120,
    ipSubnet: '203.0.113.0/24',
  };

  const result = evaluateTransactionInGraph(events, activeEvent);

  assert.equal(result.riskLevel, 'Low risk');
  assert.equal(result.recommendedAction, 'Allow');
  assert.ok(result.riskScore < 20);
});
