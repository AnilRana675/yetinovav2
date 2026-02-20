import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        white: "bg-white text-black hover:bg-neutral-100", // Custom variant for JoinSection
        brand:
          "bg-[#606FCC] text-white hover:bg-[#4A5BB5] shadow-[0_0_20px_rgba(96,111,204,0.3)] hover:shadow-[0_0_30px_rgba(96,111,204,0.5)]", // Custom variant for PartnershipsSection
        manifesto:
          "text-[#a3ff12] hover:text-white transition-colors duration-300 font-mono text-sm uppercase tracking-wider border-b border-[#a3ff12] hover:border-white pb-1 rounded-none p-0 h-auto", // Custom variant for AboutSection
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
        xl: "px-6 sm:px-10 py-4 sm:py-5 text-base sm:text-lg rounded-full", // Custom size for JoinSection
        pill: "px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base rounded-full", // Custom size for PartnershipsSection
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
