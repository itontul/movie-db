import React from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "./context";

const MovieList = () => {
  const { data } = useGlobalContext();
  console.log(data);
  return (
    <main className="poster-container">
      {data.map((item) => (
        <Link to={`movie/${item.imdbID}`}>
          <div className="poster">
            <img
              src={
                item.Poster === "N/A"
                  ? "https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg"
                  : item.Poster
              }
              alt=""
            />
            <div className="info">
              <h3>{item.Title}</h3>
              <p>{item.Year}</p>
            </div>
          </div>
        </Link>
      ))}
    </main>
  );
};

export default MovieList;
