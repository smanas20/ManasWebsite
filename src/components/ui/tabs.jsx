
import * as TabsPrimitive from "@radix-ui/react-tabs";
import { cn } from "../../lib/utils";

export const Tabs = TabsPrimitive.Root;

export const TabsList = ({ className, ...props }) => (
  <TabsPrimitive.List className={cn("flex rounded-lg bg-gray-700 p-1", className)} {...props} />
);

export const TabsTrigger = ({ className, ...props }) => (
  <TabsPrimitive.Trigger
    className={cn("px-4 py-2 rounded-md text-white data-[state=active]:bg-white data-[state=active]:text-black", className)}
    {...props}
  />
);

export const TabsContent = ({ className, ...props }) => (
  <TabsPrimitive.Content className={cn("mt-2", className)} {...props} />
);
