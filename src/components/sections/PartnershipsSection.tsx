"use client";

import { ArrowRight } from "lucide-react";
import dynamic from "next/dynamic";
import { Button } from "@/components/ui/Button";
import { List, ListItem, ListItemContent } from "@/components/ui/list";

const Aurora = dynamic(() => import("@/components/ui/aurora/Aurora"), {
  ssr: false,
  loading: () => <div className="absolute inset-0 bg-linear-to-b from-[#606FCC]/10 to-black" />,
});

const PARTNERSHIP_TYPES = [
  {
    id: 1,
    category: "Strategic\nInvestment",
    description:
      "Deploy capital into export-ready ventures. From green finance to fintech, acquire equity in the startups that are building a stronger Nepal.",
    romanNumeral: "I",
  },
  {
    id: 2,
    category: "Government &\nNGO's",
    description:
      "Move beyond traditional grants. Co-design scalable technology pilots in education and disaster resilience that actually survive and scale.",
    romanNumeral: "II",
  },
  {
    id: 3,
    category: "Corporate\nInnovation",
    description:
      "Partner with our labs to modernize your legacy systems. We deploy our builder teams to solve your organization's hardest technical problems.",
    romanNumeral: "III",
  },
  {
    id: 4,
    category: "The Reinvestment\nCycle",
    description:
      "Every partnership feeds the engine. A portion of all returns is reinvested into youth training and applied R&D.",
    romanNumeral: "-",
  },
];

export function PartnershipsSection() {
  return (
    <section
      id="partnerships"
      className="relative bg-black py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 xl:px-32 overflow-hidden"
    >
      {/* Aurora Background - Desktop */}
      <div className="hidden md:block absolute -left-[100px] sm:-left-[150px] lg:-left-[200px] inset-y-0 h-full w-[150vh] opacity-60 pointer-events-none origin-center -rotate-90">
        <Aurora
          colorStops={["#7cff67", "#5227FF", "#ffffff"]}
          amplitude={0.8}
          blend={0.4}
          speed={0.3}
        />
      </div>
      <div className="hidden md:block absolute -right-[100px] sm:-right-[150px] lg:-right-[200px] inset-y-0 h-full w-[150vh] opacity-60 pointer-events-none origin-center rotate-90">
        <Aurora amplitude={0.8} blend={0.4} speed={0.3} />
      </div>

      {/* Aurora Background - Mobile (fit within section) */}
      <div className="md:hidden absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] aspect-square opacity-30 pointer-events-none">
        <Aurora
          colorStops={["#7cff67", "#5227FF", "#ffffff"]}
          amplitude={0.6}
          blend={0.4}
          speed={0.3}
        />
      </div>
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black to-transparent pointer-events-none z-10" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black to-transparent pointer-events-none z-10" />
      <div className="max-w-[1200px] mx-auto relative z-10">
        <div className="mb-10 sm:mb-16 animate-fade-in opacity-0 [--animation-delay:0ms]">
          <h2 className="font-serif font-normal text-white text-2xl sm:text-4xl md:text-5xl lg:text-6xl tracking-[0] leading-normal mb-4">
            Don&apos;t Just Fund. Fuel.
          </h2>
          <p className="font-sans font-normal text-[#666060] text-xl tracking-[0] leading-normal">
            Partner with us to deploy capital into high-growth ventures and national infrastructure.
          </p>
        </div>

        <List>
          {PARTNERSHIP_TYPES.map((partnership, index) => (
            <ListItem
              key={partnership.id}
              className={`animate-fade-in opacity-0 [--animation-delay:${
                200 + index * 150
              }ms] group`}
            >
              <ListItemContent className="group">
                <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_2fr] gap-2 md:gap-6 lg:gap-8 items-center w-full">
                  <div className="flex items-start justify-between md:contents">
                    <h3 className="font-serif font-bold text-[#dcdcdc] group-hover:text-black text-base md:text-xl lg:text-2xl tracking-[0] leading-tight md:leading-[29px] whitespace-pre-line">
                      {partnership.category}
                    </h3>
                    <div className="font-serif font-black text-[#315434] group-hover:text-[#3759a4] text-base md:text-xl lg:text-2xl text-right md:text-center tracking-[0] leading-tight md:leading-[29px] md:min-w-[60px] lg:min-w-[80px] transition-colors md:self-center">
                      {partnership.romanNumeral}
                    </div>
                  </div>
                  <p className="font-sans font-normal text-white group-hover:text-black text-sm md:text-base lg:text-lg tracking-[0] leading-[18px]">
                    {partnership.description}
                  </p>
                </div>
              </ListItemContent>
            </ListItem>
          ))}
        </List>

        <div className="mt-10 sm:mt-16 text-center animate-fade-in opacity-0 [--animation-delay:800ms]">
          <Button asChild variant="brand" size="pill" className="group transition-all duration-300">
            <a href="#contact">
              Become a Partner
              <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
