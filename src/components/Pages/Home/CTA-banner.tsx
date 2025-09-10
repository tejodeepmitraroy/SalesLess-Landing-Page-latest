import SectionEnd from "@/components/Layout/SectionEnd";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import React from "react";

const CTABanner = () => {
  return (
    <>
      <section className="w-full border-y">
        <section className="mx-auto max-w-6xl border-x p-10">
          <section className="flex flex-col items-center justify-center gap-3">
            <h2 className="text-4xl font-semibold">Ready to get started?</h2>
            <p className="text-lg font-medium">
              SalesLess is a headless Ecommerce CRM for Manage all sales
              activities of businesses focused on single dashboards.
            </p>
            <section className="mt-10 flex w-full flex-col items-center justify-center gap-3">
              <Button className=" text-xl py-6 px-6 border-2 border-black">
                <span className="flex items-center gap-3">
                  Get started Now <ArrowUpRight className="size-7" />
                </span>
              </Button>
            </section>
          </section>
        </section>
      </section>
      <SectionEnd />
    </>
  );
};

export default CTABanner;
