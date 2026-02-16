import Image from "next/image";

interface VentureCardProps {
  image: string;
  imageAlt: string;
  category: string;
  title: string;
  description: string;
  badge: string;
  badgeStyle?: "dark" | "light";
  offsetTop?: boolean;
}

export function VentureCard({
  image,
  imageAlt,
  category,
  title,
  description,
  badge,
  badgeStyle = "dark",
  offsetTop = false,
}: VentureCardProps) {
  return (
    <div className={`group relative flex flex-col ${offsetTop ? "md:mt-24" : ""}`}>
      <div className="relative w-full aspect-4/3 rounded-[2rem] overflow-hidden mb-8 border border-white/5">
        <Image
          src={image}
          alt={imageAlt}
          fill
          className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 transform group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-all duration-500" />
        <div className="absolute top-6 right-6">
          <span
            className={`inline-flex items-center px-4 py-1.5 rounded-full backdrop-blur-md text-xs font-medium tracking-wide border ${
              badgeStyle === "light"
                ? "bg-white/90 text-black"
                : "bg-black/60 text-white border-white/10"
            }`}
          >
            {badge}
          </span>
        </div>
      </div>
      <div className="pr-4">
        <div className="flex justify-between items-start mb-4">
          <div>
            <span className="text-purple-400 text-xs uppercase tracking-widest mb-2 block">
              {category}
            </span>
            <h3 className="font-serif text-3xl text-white mb-3 group-hover:text-purple-400 transition-colors">
              {title}
            </h3>
          </div>
          <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-purple-600 group-hover:border-purple-600 transition-all duration-300">
            <span className="material-symbols-outlined text-white text-sm">
              arrow_outward
            </span>
          </div>
        </div>
        <p className="text-neutral-text-muted font-light leading-relaxed mb-6">
          {description}
        </p>
      </div>
    </div>
  );
}
