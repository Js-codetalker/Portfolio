import { ReactNode } from "react";
import css from './Button.module.scss'

interface ButtonProps {
  Component?: "button" | "a";
  children?: ReactNode;
  url?: string
}
const Button: React.FC<ButtonProps> = ({ Component = "button", children, url }) => {
  return (
      <Component
        type="button"
        className={css.btn}
        href={url}
      >
        {children}
      </Component>
  );
};

export default Button;
