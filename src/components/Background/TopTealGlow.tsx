import React from "react";
import SmoothScrolling from "../Layout/SmoothScrolling";

const TopTealGlowBgWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen  w-full bg-transparent relative">
      {/* Teal Glow Background */}
      <div
        className="absolute  top-0 inset-0 z-0"
        style={{
          backgroundImage: `
        radial-gradient(125% 125% at 50% 10%, #ffffff 40%, #14b8a6 100%)
      `,
          backgroundSize: "100% 100%",
        }}
      />
      {/* Your Content/Components */}

      <div className="z-10 relative w-full h-dvh">{children}</div>
    </div>
  );
};

export default TopTealGlowBgWrapper;
