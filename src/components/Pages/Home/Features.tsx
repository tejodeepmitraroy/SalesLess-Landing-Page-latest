import SectionEnd from '@/components/Layout/SectionEnd';
import SectionHeader from '@/components/Layout/SectionHeader';
import React from 'react'
import { 
  Package, 
  CreditCard, 
  ShoppingCart, 
  Users, 
  BarChart3, 
  Shield,
  Zap,
  Globe,
  FileText,
  Bell
} from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Package,
      title: "Product Management",
      description: "Easily manage your product catalog with advanced inventory tracking, variants, and bulk operations.",
      color: "text-blue-600"
    },
    {
      icon: CreditCard,
      title: "Payment Gateway Wrapper",
      description: "Seamlessly integrate multiple payment providers with our unified payment processing system.",
      color: "text-green-600"
    },
    {
      icon: ShoppingCart,
      title: "Order Management",
      description: "Streamline order processing with automated workflows, status tracking, and fulfillment tools.",
      color: "text-purple-600"
    },
    {
      icon: Users,
      title: "Customer Management",
      description: "Build lasting relationships with comprehensive customer profiles and interaction history.",
      color: "text-orange-600"
    },
    {
      icon: BarChart3,
      title: "Analytics & Reporting",
      description: "Make data-driven decisions with real-time analytics and customizable business reports.",
      color: "text-indigo-600"
    },
    {
      icon: Shield,
      title: "Security & Compliance",
      description: "Enterprise-grade security with PCI compliance and advanced fraud protection.",
      color: "text-red-600"
    },
    {
      icon: Zap,
      title: "Automation Tools",
      description: "Automate repetitive tasks with smart workflows and trigger-based actions.",
      color: "text-yellow-600"
    },
    {
      icon: Globe,
      title: "Multi-Channel Sales",
      description: "Sell across multiple channels with unified inventory and order management.",
      color: "text-teal-600"
    },
    {
      icon: FileText,
      title: "Document Management",
      description: "Organize invoices, contracts, and documents with our integrated file management system.",
      color: "text-pink-600"
    }
  ];

  return (
    <>
      <SectionHeader
        title="Everything you need for Online Store"
        description="Everything you need to manage your business efficiently with Salesless CRM's comprehensive feature set."
        cta={false}
      />
      <section className="w-full border-y">
        <section className="mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-6xl border-x p-6 gap-6">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className="group relative bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-all duration-300 hover:border-primary/20 hover:-translate-y-1"
              >
                <div className="flex flex-col items-start space-y-4">
                  <div
                    className={`p-3 rounded-lg bg-muted/50 group-hover:bg-primary/10 transition-colors duration-300`}
                  >
                    <IconComponent
                      className={`w-6 h-6 ${feature.color} group-hover:text-primary transition-colors duration-300`}
                    />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
                <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
            );
          })}
        </section>
      </section>
      <SectionEnd />
    </>
  );
}

export default Features