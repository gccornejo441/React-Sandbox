import { ButtonHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

export const Button = ({ children, className, ...props }: ButtonProps) => {
  return (
    <button
      {...props}
      className={twMerge(
        "relative flex cursor-pointer items-center justify-center gap-x-2.5",
        "rounded-full px-4 py-2 text-sm font-normal",
        "md:w-48 md:py-3 md:text-base",
        "bg-black text-white",
        "hover:bg-neutral-800",
        "border border-[var(--border)]",
        "shadow-[var(--shadow)]",
        className,
      )}
    >
      {children}
    </button>
  );
};
