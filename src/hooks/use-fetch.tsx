import { useEffect, useState } from "react";

export const useFetch = async(url: string) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true)
    setData(null);
    setError(null);
    async function fetchData() { 
      const data = await fetch(url) 
      const res = await data.json()
      
      setData(res)
      setLoading(false)
    }

    fetchData()
  }, [url])

  return { data, loading, error }
}