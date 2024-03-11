import { useEffect, useState } from "react";
import { useFetchAxios } from "../../../hooks/useFetch";
import { FeedPhotosItem } from "./FeedPhotosItem";
import { Error } from "../../Helpers/Error";
import { Loading } from "../../Helpers/Loading";
import { PhotosProps } from "./photo";
import { FeedPhotosContainer } from "./styled";

export function FeedPhotos({
  setModalPhoto,
}: {
  setModalPhoto: React.Dispatch<React.SetStateAction<PhotosProps>>;
}) {
  const { data, error, loading, request } = useFetchAxios();
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(6);
  const [userId, setUserId] = useState(0);
  const [photos, setPhotos] = useState<PhotosProps[]>([]);

  async function getPhotos() {
    const { response } = await request({
      url: `/api/photo/?_page${page}&_total=${total}&_user=${userId}`,
      method: "GET",
    });
    setPhotos(response?.data);
    return response?.data;
  }

  useEffect(() => {
    getPhotos();
  }, [page, total, userId]);

  if (error) return <Error error={error} />;
  if (loading) return <Loading />;

  if (data) {
    return (
      <FeedPhotosContainer className="animeLeft">
        {photos.map((photo: PhotosProps) => (
          <FeedPhotosItem
            key={photo.id}
            photo={photo}
            setModalPhoto={setModalPhoto}
          />
        ))}
      </FeedPhotosContainer>
    );
  } else {
    return null;
  }
}
