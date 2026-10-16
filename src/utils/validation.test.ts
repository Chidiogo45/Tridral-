import test from 'node:test';
import assert from 'node:assert/strict';
import { validateQuoteForm } from './validation.ts';
import type { QuoteFormData } from '../types/index.ts';

test('validates complete valid quote form submission', () => {
  const validData: QuoteFormData = {
    fullName: 'David Vance',
    workEmail: 'david@fintechbank.io',
    companyName: 'Fintech Bank Global',
    companySize: '51-250 employees',
    primaryRequirement: 'Mule networks & laundering rings',
    deploymentTimeline: '1-3 months',
    environmentDetails: 'Running Kafka transaction bus with 2M daily events.',
  };

  const result = validateQuoteForm(validData);
  assert.equal(result.isValid, true);
  assert.equal(Object.keys(result.errors).length, 0);
});

test('catches missing required fields and invalid email', () => {
  const invalidData: QuoteFormData = {
    fullName: '',
    workEmail: 'not-an-email',
    companyName: '',
    companySize: '',
    primaryRequirement: '',
    deploymentTimeline: '',
    environmentDetails: '',
  };

  const result = validateQuoteForm(invalidData);
  assert.equal(result.isValid, false);
  assert.ok(result.errors.fullName);
  assert.ok(result.errors.workEmail);
  assert.ok(result.errors.companyName);
  assert.ok(result.errors.companySize);
  assert.ok(result.errors.primaryRequirement);
  assert.ok(result.errors.deploymentTimeline);
});
