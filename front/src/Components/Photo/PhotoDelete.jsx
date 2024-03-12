import React from "react";
import styles from "./PhotoDelete.module.css";
import { COMMENT_DELETE } from "../../Api";
import useFetch from "../../Hooks/useFetch";

export function PhotoDelete({ id }) {
  const { loading, request } = useFetch();

  async function handleDeleteClick() {
    const confirm = window.confirm("Tem certeza que deseja deletar?");
    if (confirm) {
      const { url, options } = COMMENT_DELETE(id);
      const { response } = await request(url, options);
      if (response.ok) window.location.reload();
    }
  }

  return (
    <div>
      {loading ? (
        <button className={styles.delete} disabled>
          deletar
        </button>
      ) : (
        <button className={styles.delete} onClick={handleDeleteClick}>
          deletar
        </button>
      )}
    </div>
  );
}
