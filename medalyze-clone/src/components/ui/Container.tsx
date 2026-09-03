import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg";
}

const sizeStyles: Record<string, string> = {
  sm: "max-w-4xl",
  md: "max-w-6xl",
  lg: "max-w-7xl",
};

export default function Container({
  children,
  className = "",
  size = "md",
}: ContainerProps) {
  return (
    <div className={`mx-auto w-full px-4 sm:px-6 lg:px-8 ${sizeStyles[size]} ${className}`}>
      {children}
    </div>
  );
}
