import NextImage from "next/image";

interface ImageProps {
  useRatio?: boolean;
  src: string;
  className?: string;
  containerClassName?: string;
  ObjFit?: "cover" | "contain";
  alt: string;
  width?: number;
  height?: number;
  layout?: "fixed" | "intrinsic" | "fill" | "responsive";
  isExternal?: boolean
}
const Image: React.FC<ImageProps> = ({
  src,
  alt,
  className = "",
  layout = "intrinsic",
  useRatio = true,
  ObjFit = "cover",
  containerClassName = "",
  isExternal = true,
  ...rest
}) => {
  const { width, height } = rest;
  const url = isExternal ? `https:${src}` : src
  return useRatio ? (
      <NextImage
        objectFit={ObjFit}
        src={url}
        alt={alt}
        layout="fill"
        className={className}
      />
  ) : (
    <NextImage
      className={className}
      objectFit={ObjFit}
      src={url}
      alt={alt}
      height={height}
      width={width}
      layout={layout}
    />
  );
};

export default Image;
