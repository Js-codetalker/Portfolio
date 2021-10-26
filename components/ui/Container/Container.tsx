import { ReactNode, JSXElementConstructor } from "react";

interface ContainerProps {
  children: ReactNode;
  Component?: "div" | "section" | JSXElementConstructor<any>;
  className?: string;
  bgColor?: string;
  useDefault?: boolean;
}

const Container: React.FC<ContainerProps> = ({
  children,
  Component = "section",
  className,
  bgColor,
  useDefault = true,
}) => {
  const defaultClasses = useDefault
    ? "w-full px-20 lg:max-w-1280 lg:mx-auto lg:px-60"
    : "";
  return bgColor ? (
    <Component className={bgColor}>
      <div className={`${defaultClasses} ${className}`}>{children}</div>
    </Component>
  ) : (
    <Component className={`${defaultClasses} ${className}`}>
      {children}
    </Component>
  );
};

export default Container;
