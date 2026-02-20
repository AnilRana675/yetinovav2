import type { LucideIcon } from "lucide-react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export function Card({ children, className = "" }: CardProps) {
  return (
    <div
      className={`rounded-2xl sm:rounded-3xl border border-white/10 bg-surface-dark/30 hover:bg-surface-dark/50 transition-all duration-500 ${className}`}
    >
      {children}
    </div>
  );
}

interface CardWithIconProps {
  icon: LucideIcon;
  title: string;
  description: string;
  stepNumber?: number;
  subtitle?: string;
  variant?: "dark" | "light";
}

export function CardWithIcon({
  icon: Icon,
  title,
  description,
  stepNumber,
  subtitle,
  variant = "dark",
}: CardWithIconProps) {
  const isDark = variant === "dark";

  return (
    <div
      className={`group relative p-5 sm:p-8 lg:p-10 rounded-2xl sm:rounded-3xl border transition-all duration-500 backdrop-blur-md ${isDark ? "border-white/20 bg-surface-dark/70 hover:bg-surface-dark/80 hover:border-(--accent-color)/40" : "border-neutral-200 bg-white/90 hover:border-(--accent-color)/40 hover:shadow-lg hover:shadow-(--accent-color)/5"}`}
    >
      {stepNumber && (
        <div
          className={`absolute top-4 sm:top-6 right-4 sm:right-6 text-4xl sm:text-6xl font-serif font-bold transition-all ${isDark ? "text-white/5 group-hover:text-(--accent-color)/10" : "text-neutral-100 group-hover:text-neutral-200"}`}
        >
          0{stepNumber}
        </div>
      )}

      <div
        className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center mb-4 sm:mb-6 transition-all ${isDark ? "bg-(--accent-color)/10 border border-(--accent-color)/20 group-hover:bg-(--accent-color)/20" : "bg-(--accent-color)/5 border border-(--accent-color)/10 group-hover:bg-(--accent-color)/10 group-hover:border-(--accent-color)/20"}`}
      >
        <Icon
          className={`w-5 h-5 sm:w-6 sm:h-6 ${isDark ? "text-(--accent-color)" : "text-(--accent-color)"}`}
        />
      </div>

      <h3
        className={`font-serif text-xl sm:text-2xl lg:text-3xl mb-1 ${isDark ? "text-white" : "text-neutral-900"}`}
      >
        {title}
      </h3>

      {subtitle && (
        <p
          className={`text-xs sm:text-sm font-mono font-medium tracking-wider uppercase mb-3 sm:mb-4 ${isDark ? "text-(--accent-color)" : "text-neutral-500"}`}
        >
          {subtitle}
        </p>
      )}

      <p
        className={`font-light leading-relaxed text-sm sm:text-base ${isDark ? "text-neutral-text-muted" : "text-neutral-500"}`}
      >
        {description}
      </p>
    </div>
  );
}

interface LeaderCardProps {
  role: string;
  name: string;
  quote?: string;
  variant?: "featured" | "default";
}

export function LeaderCard({ role, name, quote, variant = "default" }: LeaderCardProps) {
  if (variant === "featured") {
    return (
      <div className="sm:col-span-2 lg:col-span-2 p-5 sm:p-8 rounded-2xl sm:rounded-3xl border border-white/10 bg-surface-dark/30">
        <p className="text-xs font-medium tracking-wider uppercase text-neutral-text-muted mb-2">
          {role}
        </p>
        <h3 className="font-serif text-xl sm:text-2xl text-white mb-3 sm:mb-4">{name}</h3>
        {quote && (
          <p className="text-neutral-text/80 font-light italic border-l-2 border-(--accent-color)/50 pl-3 sm:pl-4 text-sm sm:text-base">
            &ldquo;{quote}&rdquo;
          </p>
        )}
      </div>
    );
  }

  return (
    <div className="p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-white/5 bg-white/5">
      <p className="text-xs font-medium tracking-wider uppercase text-neutral-text-muted mb-2">
        {role}
      </p>
      <h3 className="font-serif text-lg sm:text-xl text-white">{name}</h3>
    </div>
  );
}

interface VentureCardProps {
  badge: string;
  badgeColor: string;
  name: string;
  tagline: string;
  description: string;
  status: string;
  statusColor: string;
  offsetTop?: boolean;
}

export function VentureCard({
  badge,
  badgeColor,
  name,
  tagline,
  description,
  status,
  statusColor,
  offsetTop = false,
}: VentureCardProps) {
  return (
    <div
      className={`group relative p-5 sm:p-8 lg:p-10 rounded-2xl sm:rounded-3xl border border-white/10 bg-surface-dark/30 hover:bg-surface-dark/50 transition-all duration-500 ${offsetTop ? "lg:mt-24" : ""}`}
    >
      <div
        className={`inline-flex px-2 sm:px-3 py-1 rounded-full text-xs font-medium tracking-wider uppercase border mb-4 sm:mb-6 ${badgeColor}`}
      >
        {badge}
      </div>

      <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-white mb-2 group-hover:text-glow-accent transition-all">
        {name}
      </h3>

      <p className="text-base sm:text-lg text-neutral-text font-medium mb-3 sm:mb-4">{tagline}</p>

      <p className="text-neutral-text-muted font-light leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">
        {description}
      </p>

      <div className="flex items-center gap-2">
        <div className={`w-2 h-2 rounded-full ${statusColor.replace("text-", "bg-")}`} />
        <span className={`text-xs sm:text-sm font-medium ${statusColor}`}>{status}</span>
      </div>
    </div>
  );
}

interface ValueCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function ValueCard({ icon: Icon, title, description }: ValueCardProps) {
  return (
    <div className="p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-white/20 bg-surface-dark backdrop-blur-md transition-all duration-300 hover:bg-surface-dark/80 hover:border-(--accent-color)/40">
      <div className="flex gap-3 sm:gap-4">
        <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-(--accent-color)/20 border border-(--accent-color)/30 flex items-center justify-center shrink-0">
          <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-(--accent-color)" />
        </div>
        <div>
          <h3 className="text-white font-medium mb-1 text-sm sm:text-base">{title}</h3>
          <p className="text-neutral-text-muted font-light text-xs sm:text-sm leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
