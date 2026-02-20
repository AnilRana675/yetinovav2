"use client";

import dynamic from "next/dynamic";

const Aurora = dynamic(() => import("@/components/ui/aurora/Aurora"), {
  ssr: false,
  loading: () => (
    <div className="absolute inset-0 bg-linear-to-b from-[#606FCC]/10 to-black" />
  ),
});

export function AuroraBackground() {
  return (
    <div className="absolute inset-0 z-0">
      <Aurora amplitude={1.2} blend={0.5} speed={0.5} />
    </div>
  );
}
