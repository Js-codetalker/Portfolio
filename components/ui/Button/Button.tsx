import { ReactNode } from "react";
import css from "./Button.module.scss";

interface ButtonProps {
  Component?: "button" | "a";
  children?: ReactNode;
  url?: string;
  onClick?: any;
}
const Button: React.FC<ButtonProps> = ({
  Component = "button",
  children,
  url,
  onClick,
}) => {
  return (
    <Component type="button" className={css.btn} href={url} onClick={onClick}>
      {children}
    </Component>
  );
};

export default Button;
