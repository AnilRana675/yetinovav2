import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-black py-16 px-8 md:px-16 border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-end gap-8 text-neutral-text-muted text-sm font-light">
        <div className="space-y-4">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2 h-2 bg-white rounded-full"></div>
            <span className="text-lg font-serif tracking-tight text-white">
              YetiNova
            </span>
          </div>
          <p className="max-w-xs text-xs opacity-60">
            A strategic innovation platform for AI-driven sustainable digital
            ventures.
          </p>
          <p className="text-xs opacity-40">
            © 2024 YetiNova Ventures. All rights reserved.
          </p>
        </div>
        <div className="flex gap-8">
          <Link href="#" className="hover:text-arc-purple transition-colors">
            Privacy Policy
          </Link>
          <Link href="#" className="hover:text-arc-purple transition-colors">
            Terms of Use
          </Link>
          <Link href="#" className="hover:text-arc-purple transition-colors">
            Contact Us
          </Link>
        </div>
      </div>
    </footer>
  );
}
