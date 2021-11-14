import { Asset } from "contentful";
import { Image } from "..";
interface MediaItemProps {
  asset: Asset;
  videoClasses?: string;
  imageClasses?: string;
}
const MediaItem: React.FC<MediaItemProps> = ({
  asset,
  videoClasses,
  imageClasses,
}) => {
  const mediaType = asset.fields.file.contentType;
  return mediaType.includes("video") ? (
    <video
      tabIndex={0}
      controls
      className={videoClasses}
      src={asset.fields.file.url}
    ></video>
  ) : (
    <Image
      src={asset.fields.file.url}
      alt={asset.fields.title ?? ""}
      className={imageClasses}
    />
  );
};

export default MediaItem;
