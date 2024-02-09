import { useEffect, useState } from "react";
export const useAsync = (asyncFuncion, dependencies = []) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);

  useEffect(() => {
    setLoading(true);
    asyncFuncion()
      .then((data) => {
        setData(data);
      })
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, dependencies);

  return {
    data,
    error,
    loading,
  };
};
