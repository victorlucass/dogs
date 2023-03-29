import { AxiosRequestConfig } from "axios";
import { useCallback, useState } from "react";
import { api } from "../api";

export function useFetchAxios() {
  const [data, setData] = useState({});
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const request = useCallback(async (config: AxiosRequestConfig) => {
    let response;
    try {
      setError("");
      setLoading(true);
      response = await api(config);
      setData(response.data);
    } catch (err: any) {
      console.log(err);
      setError(err.response.data.message);
    } finally {
      setLoading(false);
      return { response };
    }
  }, []);

  return { data, loading, error, request };
}
