import { useState } from "react";
import Enviar from "../../../../assets/enviar.svg";
import { useFetchAxios } from "../../../../hooks/useFetch";

export function PhotoCommentsForm({ id }: any) {
  const [comment, setComment] = useState("");
  const { request, error } = useFetchAxios();

  function handleSubmit(event: any) {
    event.preventDefault();
    const token = window.localStorage.getItem("token");
    const url = `api/comment/${id}`;
    const body = { comment };
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };
    request({ url, method: "POST", data: body, headers });
    setComment("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        id="comment"
        name="comment"
        placeholder="Adicione um comentário..."
        value={comment}
        onChange={({ target }) => setComment(target.value)}
      />
      <button type="submit">
        <img src={Enviar} alt="" />
      </button>
    </form>
  );
}
