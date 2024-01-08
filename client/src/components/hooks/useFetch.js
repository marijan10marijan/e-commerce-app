import React, { useEffect, useState } from "react";
import axios from "axios";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getProducts = async () => {
      try {
        setLoading(true);
        const response = await axios.get(import.meta.env.VITE_API_URL + url, {
          headers: {
            Authorization: "bearer" + import.meta.env.VITE_API_KEY,
          },
        });
        setData(response.data.data);
      } catch (err) {
        setError(true);
      }
      setLoading(false);
    };

    getProducts();
  }, [url]);

  return { data, loading, error };
};

export default useFetch;
