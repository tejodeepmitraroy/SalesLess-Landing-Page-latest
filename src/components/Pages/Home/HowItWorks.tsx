import SectionEnd from "@/components/Layout/SectionEnd";
import SectionHeader from "@/components/Layout/SectionHeader";
import React from "react";

const HowItWorks = () => {
  return (
    <>
      <SectionHeader
        title="How It Works"
        description="A simple, fast, and secure platform to manage your cryptocurrencies in just a few steps."
      />
      <section className="w-full border-y">
        <section className="mx-auto grid grid-cols-3 max-w-6xl border-x  items-center justify-center">
          <section className=" aspect-square border-r flex flex-col items-center justify-center gap-3">
            <h2>Product Management</h2>
            <p>Manage all your products in one place</p>
          </section>
          <section className="col-span-1  border-r aspect-square">
            <h2>Product Management</h2>
            <p>Manage all your products in one place</p>
          </section>
          <section className="col-span-1 aspect-square">
            <h2>Product Management</h2>
            <p>Manage all your products in one place</p>
          </section>
        </section>
      </section>
      <SectionEnd />
    </>
  );
};

export default HowItWorks;
