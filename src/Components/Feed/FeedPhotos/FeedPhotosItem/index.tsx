import { PhotosProps } from "../photo";
import { FeedPhotosItemContainer } from "../styled";

export function FeedPhotosItem({
  photo,
  setModalPhoto,
}: {
  photo: PhotosProps;
  setModalPhoto: React.Dispatch<React.SetStateAction<PhotosProps>>;
}) {
  function handleModal() {
    setModalPhoto(photo);
    console.log(photo);
  }
  return (
    <FeedPhotosItemContainer onClick={handleModal}>
      <img src={photo.src} alt={photo.title} />
      <span>{photo.acessos}</span>
    </FeedPhotosItemContainer>
  );
}
