import { type ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "../lib/utils";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "outline" | "ghost";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "primary", ...props }, ref) => {
        return (
            <button
                ref={ref}
                className={cn(
                    "inline-flex items-center justify-center rounded-none text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-stone-400 disabled:pointer-events-none disabled:opacity-50 tracking-widest uppercase",
                    {
                        "bg-stone-900 text-stone-50 hover:bg-stone-900/90 shadow-sm": variant === "primary",
                        "border border-stone-800 bg-transparent hover:bg-stone-100 text-stone-900": variant === "outline",
                        "hover:bg-stone-100 text-stone-900 hover:text-stone-900": variant === "ghost",
                    },
                    "h-12 px-8 py-2",
                    className
                )}
                {...props}
            />
        );
    }
);

Button.displayName = "Button";

export { Button };
