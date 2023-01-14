import React from "react";
import { useParams, Link } from "react-router-dom";
import useFetch from "./useFetch";

const Movie = () => {
  const { id } = useParams();
  const { loading, data, error } = useFetch(`&i=${id}`);
  if (loading) return <div className="loading" />;
  return (
    <div className="single-movie-container">
      <img
        src={
          data.Poster === "N/A"
            ? "https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg"
            : data.Poster
        }
        alt=""
      />
      <h2>{data.Title}</h2>
      <p>{data.Plot}</p>
      <strong>{data.Year}</strong>
      <Link to="/">
        <button>Back to home</button>
      </Link>
    </div>
  );
};

export default Movie;
