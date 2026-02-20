import * as React from "react";
import { cn } from "@/lib/utils";

const List = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("flex flex-col gap-3", className)} {...props} />
  )
);
List.displayName = "List";

const ListItem = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "rounded-2xl border border-[#222] bg-black hover:bg-white transition-all duration-300 cursor-pointer overflow-hidden",
        className
      )}
      {...props}
    />
  )
);
ListItem.displayName = "ListItem";

const ListItemContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("h-24 flex items-center justify-between px-4", className)}
      {...props}
    />
  )
);
ListItemContent.displayName = "ListItemContent";

export { List, ListItem, ListItemContent };
