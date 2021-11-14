import { React, Tailwind, Sass, NextJs } from "..";
export interface TechIconProps {
  className: string;
  width: number;
}
interface TechIconPropsRender extends TechIconProps {
  technology: "tailwindcss" | "next.js" | "sass" | "react.js";
}
const TechIcon: React.FC<TechIconPropsRender> = ({ technology, className, width }) => {
  switch (technology) {
    case "tailwindcss":
      return <Tailwind width={width} className={className} />;
    case "next.js":
      return <NextJs width={width} className={className} />;
    case "react.js":
      return <React width={width} className={className} />;
    case "sass":
      return <Sass width={width} className={className} />;
    default:
      return <></>;
  }
};
export default TechIcon;
