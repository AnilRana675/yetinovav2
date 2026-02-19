// Server Component - Static hero text rendered in HTML for fast LCP

interface HeroContentProps {
  children?: React.ReactNode;
}

export function HeroContent({ children }: HeroContentProps) {
  return (
    <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="mb-4 sm:mb-6 flex flex-col items-center text-center w-full">
        <h1 className="sr-only">YetiNova - Crafting The Boldest Builders</h1>
        <p
          className="font-serif text-3xl md:text-5xl lg:text-6xl xl:text-7xl leading-[1.1] sm:leading-[0.95] tracking-tight text-white/90 text-center hero-ghost-text"
          data-animate="title-1"
        >
          Crafting The
        </p>
        <div
          className="w-full flex justify-center hero-ghost-text"
          data-animate="title-2-wrapper"
        >
          <p
            className="font-serif text-3xl md:text-5xl lg:text-6xl xl:text-7xl leading-[1.1] sm:leading-[0.95] tracking-tight text-[var(--accent-color)] text-center"
            data-animate="title-2"
          >
            Boldest Builders.
          </p>
        </div>
      </div>
      {children}
    </div>
  );
}
