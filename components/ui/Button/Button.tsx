import { ReactNode } from "react";
import { Link } from "..";

interface ButtonProps {
  Component?: "button" | "a";
  children?: ReactNode;
  className?: string
  url?: string;
  external?: boolean;
  onClick?: any;
}
const Button: React.FC<ButtonProps> = ({
  Component = "button",
  children,
  url = "",
  className = '',
  external = false,
  onClick,
}) => {
  const defaultClasses = "inline-block py-10 px-30 border-2"
  return Component === "button" ? (
    <button type="button" className={`${defaultClasses} ${className}`} onClick={onClick}>
      {children}
    </button>
  ) : (
    <Link href={url} className={`${defaultClasses} ${className}`} isExternal={external}>
      {children}
    </Link>
  );
};

export default Button;
