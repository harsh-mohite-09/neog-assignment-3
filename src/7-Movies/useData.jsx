import { useState, useEffect } from "react";
import { fakeFetch } from "./fakeFetch";

export const useData = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const res = await fakeFetch("https://example.com/api/movies");
      if (res.status === 200) {
        setData(res.data);
      }
    } catch (e) {
      setError(e.message);
    }
  };

  return { data, error };
};
