/**
 * Utility for estimating transaction volume pricing tiers and architecture specs.
 * Usage-based model: priced strictly by transaction volume.
 */

export interface VolumeEstimate {
  monthlyVolume: number;
  ratePerThousand: number;
  estimatedMonthlyCost: number;
  slaTarget: string;
  recommendedTopology: string;
  fraudPreventedEstimate: number; // based on typical 0.12% anomaly rate
}

export function calculateVolumePricing(monthlyTransactions: number): VolumeEstimate {
  const volume = Math.max(10000, monthlyTransactions);

  // Volume-weighted rate per 1,000 transactions (USD)
  let ratePerThousand = 4.2;
  let slaTarget = '< 45ms (p99)';
  let recommendedTopology = 'Multi-tenant high-throughput cluster';

  if (volume >= 50000000) {
    ratePerThousand = 0.95;
    slaTarget = '< 25ms (p99.9)';
    recommendedTopology = 'Dedicated multi-region isolated graph cluster';
  } else if (volume >= 10000000) {
    ratePerThousand = 1.45;
    slaTarget = '< 30ms (p99)';
    recommendedTopology = 'Dedicated VPC peering / PrivateLink cluster';
  } else if (volume >= 2500000) {
    ratePerThousand = 2.1;
    slaTarget = '< 35ms (p99)';
    recommendedTopology = 'Isolated tenant partition with auto-scaling workers';
  } else if (volume >= 500000) {
    ratePerThousand = 3.2;
    slaTarget = '< 40ms (p99)';
    recommendedTopology = 'Shared edge accelerator with dedicated ingress';
  }

  const estimatedMonthlyCost = Math.round((volume / 1000) * ratePerThousand);

  // Conservative fraud rate estimation: average $145 loss per flagged mule/ATO transaction
  // assuming ~0.12% anomaly capture rate
  const estimatedAnomalies = Math.round(volume * 0.0012);
  const fraudPreventedEstimate = Math.round(estimatedAnomalies * 145);

  return {
    monthlyVolume: volume,
    ratePerThousand,
    estimatedMonthlyCost,
    slaTarget,
    recommendedTopology,
    fraudPreventedEstimate,
  };
}

export function formatNumberCompact(num: number): string {
  if (num >= 1000000) {
    return `${(num / 1000000).toFixed(1).replace(/\.0$/, '')}M`;
  }
  if (num >= 1000) {
    return `${(num / 1000).toFixed(0)}K`;
  }
  return num.toString();
}

export function formatCurrency(num: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(num);
}
