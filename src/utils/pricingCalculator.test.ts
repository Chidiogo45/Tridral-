import test from 'node:test';
import assert from 'node:assert/strict';
import { calculateVolumePricing, formatNumberCompact, formatCurrency } from './pricingCalculator.ts';

test('pricing calculator scales rate with higher volume', () => {
  const lowTier = calculateVolumePricing(100000);
  const midTier = calculateVolumePricing(1000000);
  const highTier = calculateVolumePricing(15000000);
  const enterpriseTier = calculateVolumePricing(60000000);

  assert.equal(lowTier.ratePerThousand, 4.2);
  assert.equal(midTier.ratePerThousand, 3.2);
  assert.equal(highTier.ratePerThousand, 1.45);
  assert.equal(enterpriseTier.ratePerThousand, 0.95);

  assert.ok(enterpriseTier.ratePerThousand < highTier.ratePerThousand);
  assert.ok(highTier.ratePerThousand < midTier.ratePerThousand);
});

test('pricing calculator computes monthly cost and fraud prevented estimates', () => {
  const estimate = calculateVolumePricing(5000000);
  assert.equal(estimate.ratePerThousand, 2.1);
  assert.equal(estimate.estimatedMonthlyCost, 10500);
  assert.ok(estimate.fraudPreventedEstimate > 0);
  assert.equal(estimate.slaTarget, '< 35ms (p99)');
});

test('formatting utilities produce clean tabular-ready strings', () => {
  assert.equal(formatNumberCompact(500000), '500K');
  assert.equal(formatNumberCompact(10000000), '10M');
  assert.equal(formatNumberCompact(2500000), '2.5M');
  assert.equal(formatCurrency(12500), '$12,500');
});
