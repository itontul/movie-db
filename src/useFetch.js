import React, { useEffect, useState } from "react";

const API_URL = "http://www.omdbapi.com/?";
const API_KEY = "&apikey=a4d4a4c2";

const useFetch = (urlParams) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({ show: false, msg: "" });
  const [data, setData] = useState([]);

  const fetchData = async (url) => {
    setLoading(true);
    try {
      const res = await fetch(url);
      const resData = await res.json();
      console.log(resData);
      if (resData.Response === "True") {
        setData(resData.Search || resData);
        setError({ show: false, msg: "" });
      }
      if (resData.Response === "False") {
        setData([]);
        setError({ show: true, msg: resData.Error });
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(`${API_URL}${urlParams}${API_KEY}`);
  }, [urlParams]);
  return { loading, error, data };
};

export default useFetch;
