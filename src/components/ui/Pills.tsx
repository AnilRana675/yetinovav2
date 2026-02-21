"use client";

import Link from "next/link";

interface ProjectPillProps {
  initials: string;
  bgColor: string;
  projectName: string;
  category: string;
  href: string;
}

function ProjectPill({ initials, bgColor, projectName, category, href }: ProjectPillProps) {
  return (
    <Link
      href={href}
      className="group flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2 sm:py-2.5 rounded-full border border-white/10 bg-surface-dark/40 backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-white/20"
    >
      <div
        className="w-6 h-6 sm:w-7 sm:h-7 rounded-full flex items-center justify-center text-[10px] sm:text-xs font-sans font-semibold text-white"
        style={{ backgroundColor: bgColor }}
      >
        {initials}
      </div>
      <div className="flex items-center gap-1.5">
        <span className="font-serif text-sm sm:text-base font-semibold text-white">
          {projectName}
        </span>
        <span className="text-neutral-text-muted text-sm sm:text-base">· {category}</span>
      </div>
    </Link>
  );
}

export function CurrentlyBacking() {
  return (
    <div className="flex flex-col items-center justify-center gap-3 sm:gap-4 w-full">
      <span className="text-xs sm:text-sm font-sans font-medium tracking-wider uppercase text-neutral text-center">
        Currently backing:
      </span>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 flex-wrap">
        <ProjectPill
          initials="w26"
          bgColor="rgba(124,58,237,0.3)"
          projectName="AstraYug"
          category="Digital Agency"
          href="/projects/astrayug"
        />
        <div className="hidden sm:block w-px h-4 sm:h-5 bg-white/20" />
        <ProjectPill
          initials="w25"
          bgColor="rgba(74,222,128,0.2)"
          projectName="AgroConnect"
          category="AgroTech"
          href="/projects/agroconnect"
        />
      </div>

      <span className="text-xs sm:text-sm font-sans font-medium tracking-wider uppercase text-neutral text-center mt-2">
        Yetinova is backed by:
      </span>
      <ProjectPill
        initials="WMI"
        bgColor="rgba(96,111,204,0.3)"
        projectName="WMI"
        category="Accelerator"
        href="/backing/wmi"
      />
    </div>
  );
}
