import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/src/shared/lib/cn";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  size?: "small" | "medium" | "large";
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  fullWidth?: boolean;
  loading?: boolean;
};

function Button(props: ButtonProps) {
  const {
    children,
    size = "medium",
    type = "button",
    disabled = false,
    leftIcon,
    rightIcon,
    fullWidth = false,
    loading = false,
    className,
    ...restProps
  } = props;

  const isDisabled = disabled || loading;

  return (
    <button
      type={type}
      disabled={isDisabled}
      {...restProps}
      className={cn(
        `
      gap-1
      flex
      items-center
      justify-center
  
      text-[16px]
      leading-[150%]
      font-semibold
      rounded-[18px]
      border
      transition
      duration-300
      
      focus:outline-none
      focus-visible:outline-2
      focus-visible:outline-solid
      focus-visible:outline-offset-2

      disabled:cursor-not-allowed
      disabled:opacity-60
      `,

        //variant styles
        `
      bg-orange-primary
      text-black
        border-transparent

      enabled:cursor-pointer`,

        //size styles
        size === "small" && "px-6 py-3",
        size === "medium" && "px-9.25 py-4.5",
        size === "large" && "px-12 py-6",

        //full width
        fullWidth && "w-full",

        className,
      )}
    >
      {loading && <span>Загрузка...</span>}

      {!loading && leftIcon && (
        <span className="inline-flex items-center pt-1">{leftIcon}</span>
      )}

      {!loading && <span>{children}</span>}

      {!loading && rightIcon && (
        <span className="inline-flex items-center pt-1">{rightIcon}</span>
      )}
    </button>
  );
}

export default Button;
