import type { QuoteFormData, FormErrors } from '../types/index.ts';

export function validateQuoteForm(data: QuoteFormData): { isValid: boolean; errors: FormErrors } {
  const errors: FormErrors = {};

  if (!data.fullName || data.fullName.trim().length < 2) {
    errors.fullName = 'Please enter your full name.';
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!data.workEmail || !emailRegex.test(data.workEmail.trim())) {
    errors.workEmail = 'Please provide a valid work email address.';
  }

  if (!data.companyName || data.companyName.trim().length < 2) {
    errors.companyName = 'Please enter your company or organization name.';
  }

  if (!data.companySize || data.companySize === '') {
    errors.companySize = 'Please select your organization size.';
  }

  if (!data.primaryRequirement || data.primaryRequirement === '') {
    errors.primaryRequirement = 'Please select your primary requirement.';
  }

  if (!data.deploymentTimeline || data.deploymentTimeline === '') {
    errors.deploymentTimeline = 'Please select your planned deployment timeline.';
  }

  const isValid = Object.keys(errors).length === 0;

  return { isValid, errors };
}
