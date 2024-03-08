import { useState } from "react";
import { ButtonForm } from "../../../Components/Form/Button";
import { InputForm } from "../../../Components/Form/Input";
import useForm from "../../../hooks/useForm";
import { PhotoPost, PhotoPreview } from "./styled";
import { useFetchAxios } from "../../../hooks/useFetch";
import { useNavigate } from "react-router-dom";

interface imgProps {
  raw: any;
  preview: any;
}

export function UserPhotoPost() {
  const nome = useForm();
  const peso = useForm("number");
  const idade = useForm("number");
  const [img, setImg] = useState<imgProps>({ raw: null, preview: null });
  const { data, error, loading, request } = useFetchAxios();
  const navigate = useNavigate();

  function photoPost(formData: FormData) {
    const token = window.localStorage.getItem("token");
    return {
      url: "/api/photo",
      method: "POST",
      data: formData,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
  }

  async function handleSubmit(event: React.SyntheticEvent<EventTarget>) {
    try {
      event.preventDefault();
      const formData = new FormData();
      formData.append("img", img.raw);
      formData.append("nome", nome.value);
      formData.append("peso", peso.value);
      formData.append("idade", idade.value);
      await request(photoPost(formData));
      navigate("/conta");
    } catch (error) {
      console.log(error);
    }
  }

  function handleImgChange(event: any) {
    setImg({
      preview: URL.createObjectURL(event.target.files[0]),
      raw: event.target.files[0],
    });

    console.log(event.target.files[0]);
  }

  return (
    <PhotoPost className="animeLeft">
      <form onSubmit={handleSubmit}>
        <InputForm label="Nome" name="nome" type="text" {...nome} />
        <InputForm label="Peso" name="peso" type="number" {...peso} />
        <InputForm label="Idade" name="idade" type="number" {...idade} />
        <input type="file" name="img" id="img" onChange={handleImgChange} />
        {loading ? (
          <ButtonForm label="Enviando..." disabled></ButtonForm>
        ) : (
          <ButtonForm label="Enviar" />
        )}
      </form>

      <div>
        {img.preview && (
          <PhotoPreview
            style={{ backgroundImage: `url('${img.preview}')` }}
          ></PhotoPreview>
        )}
      </div>
    </PhotoPost>
  );
}
