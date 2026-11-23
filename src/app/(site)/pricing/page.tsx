import type { Metadata } from "next";
import {
  FaqSection,
  FinalCtaBanner,
  PricingSection,
} from "@/components/xeops/HomeSections";
import { IconCheck } from "@/components/xeops/XeopsIcons";

export const metadata: Metadata = {
  title: "Pricing — XEOPS",
  description:
    "Simple, transparent pricing across Starter, Pro, and Enterprise Xeops workspaces.",
};

const COMPARISON_ROWS = [
  { label: "Active Projects", starter: "Up to 3", pro: "Unlimited", enterprise: "Unlimited" },
  { label: "Global Edge POPs", starter: "Shared pool", pro: "40+ priority POPs", enterprise: "Dedicated VPC mesh" },
  { label: "Trace Retention", starter: "7 days", pro: "90 days", enterprise: "Custom / 365+ days" },
  { label: "SSO & Access Control", starter: "Standard OAuth", pro: "Team RBAC", enterprise: "SAML 2.0, SCIM, MFA" },
  { label: "Uptime Commitment", starter: "Best effort", pro: "99.95% SLA", enterprise: "99.99% financial SLA" },
] as const;

export default function PricingPage() {
  return (
    <div className="w-full">
      <div className="pt-8">
        <PricingSection />
      </div>

      {/* Concise Feature Comparison Table */}
      <section
        aria-labelledby="compare-heading"
        className="mx-auto max-w-6xl px-5 py-10 sm:px-8"
      >
        <h2
          id="compare-heading"
          className="text-2xl font-bold tracking-tight text-[#0A0D0D]"
        >
          Compare plan specifications
        </h2>

        <div className="mt-6 overflow-x-auto rounded-[20px] border border-black/[0.08] bg-white shadow-[0_12px_36px_rgba(0,0,0,0.06)]">
          <table className="w-full min-w-[600px] border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-black/[0.08] text-xs uppercase tracking-[0.14em] text-[#727B7B]">
                <th className="px-6 py-4 font-medium">Capability</th>
                <th className="px-6 py-4 font-medium">Starter</th>
                <th className="px-6 py-4 font-medium text-[#11A39F]">Pro</th>
                <th className="px-6 py-4 font-medium text-[#A47936]">Enterprise</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-black/[0.06]">
              {COMPARISON_ROWS.map((row) => (
                <tr key={row.label} className="hover:bg-black/[0.015]">
                  <td className="px-6 py-4 font-medium text-[#0A0D0D]">
                    {row.label}
                  </td>
                  <td className="px-6 py-4 text-[#4A5353]">{row.starter}</td>
                  <td className="px-6 py-4 text-[#0A0D0D]">
                    <span className="inline-flex items-center gap-1.5">
                      <IconCheck className="h-3.5 w-3.5 text-[#11A39F]" />
                      {row.pro}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-[#4A5353]">{row.enterprise}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <FaqSection />
      <FinalCtaBanner />
    </div>
  );
}
