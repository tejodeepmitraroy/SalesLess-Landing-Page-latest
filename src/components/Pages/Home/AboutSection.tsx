import React from "react";

const AboutSection = () => {
  return (
    <section className="w-full mt-40 flex flex-col items-center justify-center gap-10 ">
      <section className="flex flex-col items-center justify-center gap-3">
        <h2 className="text-4xl font-semibold">Why choose SalesLess?</h2>
        <p className="text-lg font-medium">
          SalesLess is a headless Ecommerce CRM for Manage all sales activities
          of businesses focused on single dashboards.
        </p>
      </section>
      <section className="w-full border-y ">
        <section className="mx-auto grid grid-cols-4 max-w-6xl border-x  items-center justify-center"></section>
      </section>
    </section>
  );
};

export default AboutSection;
