import { useEffect, useState } from "react";
import { useFetchAxios } from "../../../hooks/useFetch";
import { PhotosProps } from "../FeedPhotos/photo";
import { FeedModalContainer } from "./styled";
import { Error } from "../../Helpers/Error";
import { Loading } from "../../Helpers/Loading";
import { PhotoContent } from "../../Photo/PhotoContent";

export function FeedModal({ photo }: any) {
  const { data, error, loading, request } = useFetchAxios();
  const [photoItem, setPhotoItem] = useState<any>();
  async function getPhoto() {
    const { response } = await request({
      url: `/api/photo/${photo.id}`,
      method: "GET",
    });
    setPhotoItem(response?.data);
  }

  useEffect(() => {
    getPhoto();
  }, [photo]);

  return (
    <FeedModalContainer>
      {error && <Error error={error} />}
      {loading && <Loading />}
      {data && <PhotoContent data={data} />}
    </FeedModalContainer>
  );
}
