"use client";

import { motion } from "motion/react";
import { CurrentlyBacking } from "@/components/ui/Pills";

export function CurrentlyBackingWrapper() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.25, ease: "easeOut", delay: 0.8 }}
    >
      <CurrentlyBacking />
    </motion.div>
  );
}
