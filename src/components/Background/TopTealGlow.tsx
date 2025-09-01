import React from "react";

const TopTealGlowBgWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen w-full bg-white relative">
      {/* Teal Glow Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
        radial-gradient(125% 125% at 50% 10%, #ffffff 40%, #14b8a6 100%)
      `,
          backgroundSize: "100% 100%",
        }}
      />
      {/* Your Content/Components */}
      {children}
    </div>
  );
};

export default TopTealGlowBgWrapper;
