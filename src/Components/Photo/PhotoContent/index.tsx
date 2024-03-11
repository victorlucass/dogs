import { Link } from "react-router-dom";
import {
  PhotoAttributes,
  PhotoContentContainer,
  PhotoContentStyled,
  PhotoDetails,
  PhotoTitle,
  PhotoView,
} from "./styled";
import { PhotoComments } from "../PhotoComments";
import { Title } from "../../StylesComponents/styled";

export function PhotoContent({ data }: any) {
  const { photo, comments } = data;
  return (
    <PhotoContentContainer>
      <PhotoContentStyled>
        <img src={photo?.src} alt={photo?.title} />
      </PhotoContentStyled>

      <PhotoDetails>
        <div>
          <p>
            <Link to={`/perfil/${photo?.author}`}>@{photo?.author}</Link>
            <PhotoView>{photo?.acessos}</PhotoView>
          </p>
          <Title>
            <Link to={`/foto/${photo?.id}`}>{photo?.title}</Link>
          </Title>
          <PhotoAttributes>
            <li>{photo?.peso} kg</li>
            <li>{photo?.idade} anos</li>
          </PhotoAttributes>
        </div>
      </PhotoDetails>
      <PhotoComments id={photo?.id} comments={comments} />
    </PhotoContentContainer>
  );
}
