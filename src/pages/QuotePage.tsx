import React, { useState } from 'react';
import type { PageId, QuoteFormData, FormErrors } from '../types/index.ts';
import { validateQuoteForm } from '../utils/validation.ts';
import { CheckCircle2, ArrowRight, ShieldCheck, Clock, Server, AlertCircle } from 'lucide-react';

export const QuotePage: React.FC<{ onNavigate: (page: PageId) => void }> = ({ onNavigate }) => {
  const [formData, setFormData] = useState<QuoteFormData>({
    fullName: '',
    workEmail: '',
    companyName: '',
    companySize: '',
    primaryRequirement: '',
    deploymentTimeline: '',
    environmentDetails: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { isValid, errors: validationErrors } = validateQuoteForm(formData);

    if (!isValid) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    // Simulate real network submission to Tridral pilot pipeline
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 700);
  };

  const handleReset = () => {
    setFormData({
      fullName: '',
      workEmail: '',
      companyName: '',
      companySize: '',
      primaryRequirement: '',
      deploymentTimeline: '',
      environmentDetails: '',
    });
    setErrors({});
    setIsSubmitted(false);
  };

  return (
    <div className="pt-28 pb-20 w-full">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-3xl space-y-4">
          <div className="text-xs font-semibold text-[#2F5FFF] uppercase tracking-wider">
            Evaluation Access
          </div>
          <h1 className="text-4xl sm:text-5xl font-normal text-slate-900 font-display">
            Request early pilot access & custom quote.
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            Tell us about your transaction throughput and pipeline architecture. Our systems
            engineering team will configure a dedicated shadow-mode sandbox environment for your
            evaluation within 48 hours.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Form Column */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200/80 p-8 sm:p-10 shadow-xs">
            {isSubmitted ? (
              <div className="text-center py-12 space-y-5">
                <div className="w-16 h-16 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto border border-emerald-200">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-semibold text-slate-900 font-display">
                    Pilot Request Received
                  </h3>
                  <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-slate-900">{formData.fullName}</strong>. We
                    have provisioned a sandbox ticket for{' '}
                    <strong className="text-slate-900">{formData.companyName}</strong>. A systems
                    architect will reach out to <span className="font-mono text-slate-800">{formData.workEmail}</span>{' '}
                    with API keys and sandbox documentation within one business day.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-left text-xs font-mono max-w-md mx-auto space-y-1.5">
                  <div className="text-slate-500 uppercase text-[10px]">Evaluation Ticket</div>
                  <div className="text-slate-800">
                    Target Requirement: <span className="text-[#2F5FFF]">{formData.primaryRequirement}</span>
                  </div>
                  <div className="text-slate-800">
                    Deployment Window: <span>{formData.deploymentTimeline}</span>
                  </div>
                  <div className="text-emerald-600 font-semibold">Status: In Review by Systems Architect</div>
                </div>

                <div className="pt-4">
                  <button
                    onClick={handleReset}
                    className="px-6 py-2.5 rounded-lg text-xs font-semibold bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors cursor-pointer"
                  >
                    Submit another request
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 font-sans mb-1">
                    Pilot Application Form
                  </h3>
                  <p className="text-xs text-slate-500">
                    All fields marked with an asterisk (*) are required for sandbox provisioning.
                  </p>
                </div>

                {/* Full Name & Work Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="fullName"
                      className="block text-xs font-medium text-slate-700 mb-1.5"
                    >
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="e.g. Alex Henderson"
                      className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#2F5FFF]/20 transition-all ${
                        errors.fullName
                          ? 'border-rose-400 bg-rose-50/30'
                          : 'border-slate-300 hover:border-slate-400 focus:border-[#2F5FFF]'
                      }`}
                    />
                    {errors.fullName && (
                      <p className="text-xs text-rose-600 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.fullName}</span>
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="workEmail"
                      className="block text-xs font-medium text-slate-700 mb-1.5"
                    >
                      Work Email *
                    </label>
                    <input
                      type="email"
                      id="workEmail"
                      name="workEmail"
                      value={formData.workEmail}
                      onChange={handleChange}
                      placeholder="alex@fintech.io"
                      className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#2F5FFF]/20 transition-all ${
                        errors.workEmail
                          ? 'border-rose-400 bg-rose-50/30'
                          : 'border-slate-300 hover:border-slate-400 focus:border-[#2F5FFF]'
                      }`}
                    />
                    {errors.workEmail && (
                      <p className="text-xs text-rose-600 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.workEmail}</span>
                      </p>
                    )}
                  </div>
                </div>

                {/* Company Name & Company Size */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="companyName"
                      className="block text-xs font-medium text-slate-700 mb-1.5"
                    >
                      Company Name *
                    </label>
                    <input
                      type="text"
                      id="companyName"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleChange}
                      placeholder="e.g. Apex Payments"
                      className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#2F5FFF]/20 transition-all ${
                        errors.companyName
                          ? 'border-rose-400 bg-rose-50/30'
                          : 'border-slate-300 hover:border-slate-400 focus:border-[#2F5FFF]'
                      }`}
                    />
                    {errors.companyName && (
                      <p className="text-xs text-rose-600 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.companyName}</span>
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="companySize"
                      className="block text-xs font-medium text-slate-700 mb-1.5"
                    >
                      Company Size *
                    </label>
                    <select
                      id="companySize"
                      name="companySize"
                      value={formData.companySize}
                      onChange={handleChange}
                      className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#2F5FFF]/20 transition-all bg-white cursor-pointer ${
                        errors.companySize
                          ? 'border-rose-400 bg-rose-50/30'
                          : 'border-slate-300 hover:border-slate-400 focus:border-[#2F5FFF]'
                      }`}
                    >
                      <option value="">Select organization size</option>
                      <option value="1-50 employees">1-50 employees (Early stage fintech)</option>
                      <option value="51-250 employees">51-250 employees (Growth scale)</option>
                      <option value="251-1,000 employees">251-1,000 employees (Established bank/processor)</option>
                      <option value="1,000+ employees">1,000+ employees (Global tier-1 institution)</option>
                    </select>
                    {errors.companySize && (
                      <p className="text-xs text-rose-600 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.companySize}</span>
                      </p>
                    )}
                  </div>
                </div>

                {/* Primary Requirement & Deployment Timeline */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="primaryRequirement"
                      className="block text-xs font-medium text-slate-700 mb-1.5"
                    >
                      Primary Requirement *
                    </label>
                    <select
                      id="primaryRequirement"
                      name="primaryRequirement"
                      value={formData.primaryRequirement}
                      onChange={handleChange}
                      className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#2F5FFF]/20 transition-all bg-white cursor-pointer ${
                        errors.primaryRequirement
                          ? 'border-rose-400 bg-rose-50/30'
                          : 'border-slate-300 hover:border-slate-400 focus:border-[#2F5FFF]'
                      }`}
                    >
                      <option value="">Select primary detection focus</option>
                      <option value="Account takeover">Account takeover (ATO)</option>
                      <option value="Synthetic identity">Synthetic identity detection</option>
                      <option value="Mule networks">Mule networks & coordinated laundering</option>
                      <option value="General fraud">General pre-settlement fraud & anomalies</option>
                    </select>
                    {errors.primaryRequirement && (
                      <p className="text-xs text-rose-600 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.primaryRequirement}</span>
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="deploymentTimeline"
                      className="block text-xs font-medium text-slate-700 mb-1.5"
                    >
                      Deployment Timeline *
                    </label>
                    <select
                      id="deploymentTimeline"
                      name="deploymentTimeline"
                      value={formData.deploymentTimeline}
                      onChange={handleChange}
                      className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#2F5FFF]/20 transition-all bg-white cursor-pointer ${
                        errors.deploymentTimeline
                          ? 'border-rose-400 bg-rose-50/30'
                          : 'border-slate-300 hover:border-slate-400 focus:border-[#2F5FFF]'
                      }`}
                    >
                      <option value="">Select planned timeframe</option>
                      <option value="Immediate (< 30 days)">Immediate (&lt; 30 days)</option>
                      <option value="1-3 months">1 - 3 months</option>
                      <option value="3-6 months">3 - 6 months</option>
                      <option value="Evaluation / Research">Evaluation & exploratory research</option>
                    </select>
                    {errors.deploymentTimeline && (
                      <p className="text-xs text-rose-600 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.deploymentTimeline}</span>
                      </p>
                    )}
                  </div>
                </div>

                {/* Free Text: Tell us about your environment */}
                <div>
                  <label
                    htmlFor="environmentDetails"
                    className="block text-xs font-medium text-slate-700 mb-1.5"
                  >
                    Tell us about your environment
                  </label>
                  <textarea
                    id="environmentDetails"
                    name="environmentDetails"
                    rows={4}
                    value={formData.environmentDetails}
                    onChange={handleChange}
                    placeholder="e.g. Ingesting transactions via Kafka topic, ~1.8M monthly events. Currently using rule engine with 18% false decline rate. Interested in shadow mode backtest."
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 hover:border-slate-400 focus:border-[#2F5FFF] text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#2F5FFF]/20 transition-all resize-y"
                  />
                  <p className="text-[11px] text-slate-500 mt-1">
                    Include current transaction volume, payment rails, or existing rule engine challenges.
                  </p>
                </div>

                {/* Submit button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-6 rounded-xl bg-[#2F5FFF] text-white font-semibold text-sm hover:bg-blue-600 active:scale-98 transition-all shadow-md shadow-blue-500/20 disabled:opacity-60 cursor-pointer"
                  >
                    {isSubmitting ? 'Validating & Provisioning Ticket...' : 'Submit Request for Pilot Sandbox'}
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Right Column: Pilot Process & Guarantee */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-slate-50 rounded-2xl border border-slate-200 p-7 space-y-4">
              <h3 className="text-lg font-semibold text-slate-900 font-sans">
                What happens during a Tridral pilot?
              </h3>

              <div className="space-y-3.5 text-xs text-slate-600">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-blue-100 text-[#2F5FFF] flex items-center justify-center shrink-0 font-mono font-bold text-[11px] mt-0.5">
                    1
                  </div>
                  <div>
                    <strong className="text-slate-900 block mb-0.5">Zero-Risk Shadow Mode:</strong>
                    Run alongside your production traffic. Tridral receives duplicate event copies via
                    webhook with zero impact on user authorization flows.
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-blue-100 text-[#2F5FFF] flex items-center justify-center shrink-0 font-mono font-bold text-[11px] mt-0.5">
                    2
                  </div>
                  <div>
                    <strong className="text-slate-900 block mb-0.5">Historical Anomaly Backtest:</strong>
                    Send us 30–90 days of anonymized transaction logs. We compare our graph model flags
                    against your historical chargebacks and false declines.
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-blue-100 text-[#2F5FFF] flex items-center justify-center shrink-0 font-mono font-bold text-[11px] mt-0.5">
                    3
                  </div>
                  <div>
                    <strong className="text-slate-900 block mb-0.5">Latency SLA Verification:</strong>
                    Verify sub-45ms P99 in-flight evaluations directly against your nearest AWS/GCP
                    cloud region.
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#0B0F1A] text-white rounded-2xl p-7 border border-slate-800 space-y-3">
              <div className="flex items-center gap-2 text-teal-400 font-mono text-xs">
                <ShieldCheck className="w-4 h-4" />
                <span>NDA & Enterprise Security First</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                We sign mutual enterprise NDAs prior to any data exchange. All pilot data is
                cryptographically partitioned and processed on isolated tenant hardware.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
