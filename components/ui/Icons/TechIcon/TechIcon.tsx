import { React, Tailwind, Sass, NextJs } from "..";
import { useTooltip } from "@components/ui";
type technologies = "tailwindcss" | "next.js" | "sass" | "react.js";
interface TechIconProps {
  className: string;
  width: number;
}
export interface TechIconSvgProps extends TechIconProps {
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}
interface TechIconRenderProps extends TechIconProps {
  technology: technologies;
}
const TechIcons: React.FC<TechIconRenderProps> = ({
  technology,
  className,
  width,
}) => {
  const [openTooltip, closeTooltip, Tooltip] = useTooltip();
  const label = (technology: technologies) => {
    switch (technology) {
      case "tailwindcss":
        return "Rapidly build modern websites without ever leaving your HTML. CSS framework";
      case "next.js":
        return "The React Framework for Production";
      case "react.js":
        return "A JavaScript library for building user interfaces";
      case "sass":
        return "CSS with superpowers. CSS preprocessor";
      default:
        return "";
    }
  };
  const renderIcon = (technology: technologies) => {
    switch (technology) {
      case "tailwindcss":
        return Tailwind;
      case "next.js":
        return NextJs;
      case "react.js":
        return React;
      case "sass":
        return Sass;
      default:
        const NoValidElement: React.FC = () => {
          return <></>;
        };
        return NoValidElement;
    }
  };

  const Component: React.FC<TechIconSvgProps> = renderIcon(technology);
  return (
    <Tooltip label={label(technology)}>
      <Component
        onMouseEnter={openTooltip}
        onMouseLeave={closeTooltip}
        width={width}
        className={className}
      />
    </Tooltip>
  );
};

export default TechIcons;
