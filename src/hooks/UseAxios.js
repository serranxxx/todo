import { useState } from "react";
import axios from "axios";

axios.defaults.baseURL = "https://6516149809e3260018c966c1.mockapi.io/taskify/"

export const useAxios = () => {
  const [response, setResponse] = useState(undefined);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  const operation = async (params) => {
    try {
      // setLoading(true);
      const result = await axios.request(params);
      setResponse(result);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return { response, error, loading, operation, setLoading };
};

export default useAxios;