import { PhotosProps } from "../photo";
import { FeedPhotosItemContainer } from "../styled";

export function FeedPhotosItem({ photo }: { photo: PhotosProps }) {
  return (
    <FeedPhotosItemContainer>
      <img src={photo.src} alt={photo.title} />
      <span>{photo.acessos}</span>
    </FeedPhotosItemContainer>
  );
}
