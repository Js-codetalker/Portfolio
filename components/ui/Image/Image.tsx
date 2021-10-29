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
}
const Image: React.FC<ImageProps> = ({
  src,
  alt,
  className = "",
  layout = "intrinsic",
  useRatio = true,
  ObjFit = "cover",
  containerClassName = "",
  ...rest
}) => {
  const { width, height } = rest;
  const ratio = !!height && !!width && (height * 100) / width;
  return useRatio ? (
    <div className={`relative w-full ${containerClassName}`} style={{ paddingTop: `${ratio}%` }}>
      <NextImage
        className={`${className} w-full h-full`}
        objectFit={ObjFit}
        src={src}
        alt={alt}
        height={height}
        width={width}
        layout="fill"
      />
    </div>
  ) : (
    <NextImage
      className={className}
      objectFit={ObjFit}
      src={src}
      alt={alt}
      height={height}
      width={width}
      layout={layout}
    />
  );
};

export default Image;
