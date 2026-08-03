import * as React from "react";

import { cn } from "@/lib/utils";

type ButtonProps = React.ComponentProps<"button"> & {
  variant?: "default" | "outline" | "ghost";
  size?: "default" | "sm" | "icon";
};

function Button({
  className,
  variant = "default",
  size = "default",
  ...props
}: ButtonProps) {
  const variantClasses = {
    default: "bg-indigo-600 text-white hover:bg-indigo-700",
    outline:
      "border border-slate-300 bg-white text-slate-900 hover:bg-slate-50",
    ghost: "bg-transparent text-slate-700 hover:bg-slate-100",
  };

  const sizeClasses = {
    default: "h-9 px-3 py-2 text-sm",
    sm: "h-8 px-2.5 py-1.5 text-xs",
    icon: "h-9 w-9 p-0",
  };

  return (
    <button
      data-slot="button"
      className={cn(
        "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
        variantClasses[variant],
        sizeClasses[size],
        className,
      )}
      {...props}
    />
  );
}

export { Button };
