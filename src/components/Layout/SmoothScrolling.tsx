"use client";
import ReactLenis, { LenisRef } from "lenis/react";
import React, { useEffect, useRef } from "react";
import { cancelFrame, frame } from "motion/react";

const SmoothScrolling = ({
  children,
}: {
  children: React.ReactNode;
}): React.JSX.Element => {
  const lenisRef = useRef<LenisRef>(null);

  useEffect(() => {
    function update(data: { timestamp: number }) {
      const time = data.timestamp;
      lenisRef.current?.lenis?.raf(time);
    }

    frame.update(update, true);

    return () => cancelFrame(update);
  }, []);
  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1.5, smoothWheel: true }}>
      {children}
    </ReactLenis>
  );
};

export default SmoothScrolling;
