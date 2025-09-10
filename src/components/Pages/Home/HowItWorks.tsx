import SectionEnd from "@/components/Layout/SectionEnd";
import SectionHeader from "@/components/Layout/SectionHeader";
import React from "react";
import { UserPlus, Settings, Store } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      step: 1,
      icon: <UserPlus className="w-10 h-10 text-primary" />,
      title: "Create Account",
      description: "Sign up easily and secure your profile in just a few steps",
    },
    {
      step: 2,
      icon: <Settings className="w-10 h-10 text-primary" />,
      title: "Set up Client with Credentials",
      description:
        "Configure your store settings and connect your payment methods",
    },
    {
      step: 3,
      icon: <Store className="w-10 h-10 text-primary" />,
      title: "Your Online Store is Online",
      description:
        "Start selling immediately with your fully functional online store",
    },
  ];
  return (
    <>
      <SectionHeader
        title="How to Setup"
        description="A simple, fast, and secure platform to set up your online store in just a few steps."
        ctaText="Get Started Now"
      />
      <section className="w-full border-y">
        <section className="mx-auto grid grid-cols-1 md:grid-cols-3 max-w-6xl border-x">
          {/* Step 1: Create Account */}
          {steps.map((step) => (
            <HowItWorksStep
              key={step.step}
              step={step.step}
              icon={step.icon}
              title={step.title}
              description={step.description}
            />
          ))}
        </section>
      </section>
      <SectionEnd />
    </>
  );
};

export default HowItWorks;

const HowItWorksStep = ({
  step,
  icon,
  title,
  description,
}: {
  step: number;
  icon: React.ReactNode;
  title: string;
  description: string;
}) => {
  return (
    <section className="aspect-square border-r border-b md:border-b-0 flex flex-col items-center justify-center gap-4 p-6">
      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
        <span className="text-2xl font-bold text-primary">{step}</span>
      </div>
      <div className="w-20 h-20 bg-primary/5 rounded-lg flex items-center justify-center">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-center">{title}</h3>
      <p className="text-sm text-muted-foreground text-center">{description}</p>
    </section>
  );
};
