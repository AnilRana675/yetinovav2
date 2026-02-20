"use client";

import dynamic from "next/dynamic";
import { useMediaQuery } from "@/hooks/useMediaQuery";

const Aurora = dynamic(() => import("@/components/ui/aurora/Aurora"), {
  ssr: false,
  loading: () => <div className="absolute inset-0 bg-linear-to-b from-[#606FCC]/10 to-black" />,
});

export function AuroraBackground() {
  const isMobile = useMediaQuery("(max-width: 768px)");

  const auroraProps = isMobile
    ? { amplitude: 0.6, blend: 0.4, speed: 0.3 }
    : { amplitude: 1.2, blend: 0.5, speed: 0.5 };

  return (
    <div className="absolute inset-0 z-0">
      <Aurora {...auroraProps} />
    </div>
  );
}
