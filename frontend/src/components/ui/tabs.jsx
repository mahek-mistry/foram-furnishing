import * as React from "react"
import { cva } from "class-variance-authority";
import { Tabs as TabsPrimitive } from "radix-ui"

import { cn } from "@/lib/utils"

function Tabs({
  className,
  orientation = "horizontal",
  ...props
}) {
  return (
    <TabsPrimitive.Root
      data-slot="tabs"
      data-orientation={orientation}
      className={cn("group/tabs  gap-2 data-horizontal:flex-col", className)}
      {...props} />
  );
}

const tabsListVariants = cva(
  "group/tabs-list inline-flex w-fit items-center justify-center rounded-lg p-[3px] text-muted-foreground group-data-horizontal/tabs:h-8 group-data-vertical/tabs:h-fit group-data-vertical/tabs:flex-col data-[variant=line]:rounded-none",
  {
    variants: {
      variant: {
        default: "bg-muted",
        line: "gap-1 bg-transparent",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function TabsList({
  className,
  variant = "default",
  ...props
}) {
  return (
    <TabsPrimitive.List
      data-slot="tabs-list"
      data-variant={variant}
      className={cn(tabsListVariants({ variant }), className)}
      {...props} />
  );
}

function TabsTrigger({
  className,
  ...props
}) {
  return (
  <TabsPrimitive.Trigger
    data-slot="tabs-trigger"
    className={cn(
      // Base
      "relative inline-flex items-center justify-center gap-1.5 px-4 py-2 text-sm font-medium whitespace-nowrap transition-all",

      // Text styles
      "text-blue-500 hover:text-black dark:text-blue dark:hover:text-red",

      // Focus
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50",

      // Active state
      "data-[state=active]:text-black dark:data-[state=active]:text-black",

      // Remove unwanted bg/border
      "bg-transparent border-none shadow-none",

      // Top line indicator
      "after:absolute after:left-0 after:top-0 after:h-[2px] after:w-full after:bg-blue-600 after:scale-x-0 after:transition-transform after:duration-300",

      // Show line on active
      "data-[state=active]:after:scale-x-100",

      className
    )}
    {...props}
  />
);
}

function TabsContent({
  className,
  ...props
}) {
  return (
    <TabsPrimitive.Content
      data-slot="tabs-content"
      className={cn(" text-sm outline-none", className)}
      {...props} />
  );
}

export { Tabs, TabsList, TabsTrigger, TabsContent, tabsListVariants }
