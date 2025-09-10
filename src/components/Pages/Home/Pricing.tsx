"use client";
import SectionEnd from "@/components/Layout/SectionEnd";
import SectionHeader from "@/components/Layout/SectionHeader";
import { ArrowUpRight, BadgeCheck } from "lucide-react";
import Link from "next/link";
import React from "react";

type BillingCycle = "monthly" | "yearly";

type Plan = {
  id: string;
  planLabel: string;
  priceMonthly: number;
  ctaLabel: string;
  features: string[];
  highlight?: boolean;
  badgeLabel?: string;
};

const plans: Plan[] = [
  {
    id: "Basic",
    planLabel: "Free",
    priceMonthly: 9,
    ctaLabel: "Start Free",
    features: [
      "Custom domain",
      "SEO-optimizations",
      "Auto-generated API docs",
      "Built-in components library",
    ],
  },
  {
    id: "startup",
    planLabel: "Startup",
    priceMonthly: 12,
    ctaLabel: "Upgrade to Pro",
    badgeLabel: "Popular",
    highlight: true,
    features: [
      "Custom domain",
      "SEO-optimizations",
      "Auto-generated API docs",
      "Built-in components library",
      "E-commerce integration",
      "User authentication system",
      "Multi-language support",
      "Real-time collaboration tools",
    ],
  },
  {
    id: "enterprise",
    planLabel: "Enterprise",
    priceMonthly: 24,
    ctaLabel: "Contact Sales",
    features: [
      "Custom domain",
      "SEO-optimizations",
      "Auto-generated API docs",
      "Built-in components library",
      "Real-time collaboration tools",
    ],
  },
];

const Pricing = () => {
  const [billing, setBilling] = React.useState<BillingCycle>("monthly");

  return (
    <>
      <SectionHeader
        title="Pricing"
        cta={true}
        description="Whichever plan you pick, it's free until you love your docs. That's our promise."
      />

      {/* Billing toggle */}
      <section className="w-full px-6 md:px-0">
        <section className="w-full  border-t max-w-6xl  border-x mx-auto flex items-center justify-center py-6">
          <div className="flex items-center   gap-2 rounded-full border bg-background p-1 shadow-sm">
            <button
              onClick={() => setBilling("monthly")}
              className={`px-4 py-2 text-sm rounded-full transition-colors ${
                billing === "monthly"
                  ? "bg-primary text-white"
                  : "text-foreground hover:bg-muted"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBilling("yearly")}
              className={`px-4 py-2 text-sm rounded-full transition-colors relative ${
                billing === "yearly"
                  ? "bg-primary text-white"
                  : "text-foreground hover:bg-muted"
              }`}
            >
              Yearly
              <span className="ml-2 inline-flex items-center rounded-full bg-emerald-100 px-2 py-0.5 text-[10px] font-semibold text-emerald-700 ring-1 ring-emerald-200">
                -20%
              </span>
            </button>
          </div>
        </section>
      </section>

      {/* Cards */}
      <section className="w-full px-6 md:px-0">
        <div className="mx-auto grid max-w-6xl px-4 border-x grid-cols-1 gap-6 lg:grid-cols-3">
          {plans.map((plan) => (
            <PricingCard
              key={plan.id}
              planLabel={plan.planLabel}
              priceMonthly={plan.priceMonthly}
              billing={billing}
              ctaLabel={plan.ctaLabel}
              features={plan.features}
              highlight={plan.highlight}
              badgeLabel={plan.badgeLabel}
            />
          ))}
        </div>
      </section>
      <SectionEnd />
    </>
  );
};

export default Pricing;

type PricingCardProps = {
  planLabel: string;
  priceMonthly: number;
  billing: BillingCycle;
  ctaLabel: string;
  features: string[];
  highlight?: boolean;
  badgeLabel?: string;
};

const PricingCard = ({
  planLabel,
  priceMonthly,
  billing,
  ctaLabel,
  features,
  highlight = false,
  badgeLabel,
}: PricingCardProps) => {
  const pricePerMonth =
    billing === "monthly" ? priceMonthly : Math.round(priceMonthly * 80) / 100;

  return (
    <div
      className={`relative flex h-full flex-col overflow-hidden rounded-2xl border bg-white p-6 shadow-sm ${
        highlight ? "ring-1 ring-primary/50" : ""
      }`}
    >
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium text-muted-foreground">
            {planLabel}
          </span>
          {badgeLabel ? (
            <span className="inline-flex items-center rounded-full bg-blue-100 px-2 py-0.5 text-[10px] font-semibold text-blue-700 ring-1 ring-blue-200">
              {badgeLabel}
            </span>
          ) : null}
        </div>
      </div>

      {/* Price */}
      <div className="mb-6">
        <div className="flex items-end gap-1">
          <span className="text-4xl font-semibold tracking-tight">
            ${pricePerMonth}
          </span>
          <span className="pb-1 text-sm text-muted-foreground">/month</span>
        </div>
      </div>

      {/* CTA */}
      <div className="mb-6">
        <Link
          href="/"
          className={`${
            highlight
              ? "bg-primary text-white hover:opacity-90"
              : "bg-foreground text-white hover:opacity-90"
          } inline-flex w-full items-center justify-center rounded-full px-4 py-3 text-sm font-medium transition-opacity`}
        >
          {ctaLabel}
        </Link>
      </div>

      {/* Divider */}
      <div className="mb-4 h-px w-full bg-border" />

      {/* Features */}
      <ul className="flex flex-col gap-3 text-sm">
        {features.map((feature) => (
          <li key={feature} className="flex items-center gap-2">
            <BadgeCheck
              className={`h-4 w-4 ${
                highlight ? "text-white/90" : "text-emerald-600"
              }`}
            />
            <span
              className={`${highlight ? "text-foreground" : "text-foreground"}`}
            >
              {feature}
            </span>
          </li>
        ))}
      </ul>

      {/* Footer link like screenshot */}
      <div className="mt-6">
        {!highlight ? (
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
          >
            View Docs <ArrowUpRight className="h-4 w-4" />
          </Link>
        ) : null}
      </div>
    </div>
  );
};
