import { useState } from "react";
import { FeedModal } from "./FeedModal";
import { FeedPhotos } from "./FeedPhotos";
import { PhotosProps } from "./FeedPhotos/photo";

export function Feed() {
  const [modalPhoto, setModalPhoto] = useState<PhotosProps>({
    id: 0,
    author: "",
    title: "",
    date: "",
    src: "",
    peso: "",
    idade: "",
    acessos: "",
    total_comments: "",
  });
  return (
    <div>
      {modalPhoto.id !== 0 && <FeedModal photo={modalPhoto} />}
      <FeedPhotos setModalPhoto={setModalPhoto} />
    </div>
  );
}
