import React, { useEffect, useState } from "react";
import "./Row.css";
import axios from "../../../utils/axios";

import SingleVideo from "../../Video/SingleVideo";
import { Link } from "react-router-dom";

export default function Row({ title, fetchUrl, isLargeRow, overview }) {
  const [movies, setMovies] = useState([]);

  const baseUrl = "https://image.tmdb.org/t/p/original";

  useEffect(() => {
    (async () => {
      try {
        const request = await axios.get(fetchUrl);
        setMovies(request.data.results);
      } catch (err) {}
    })();
  }, [fetchUrl]);

  return (
    <div className="Row">
      <h1>{title}</h1>
      <div className="row_posters">
        {movies?.map((movie, index) => {
          return (
            <Link
              to={`/single/${movie.title}?title=${movie.overview}`}
              target="_blank"
              key={index}
            >
              <img
                src={`${baseUrl}${
                  isLargeRow ? movie.poster_path : movie.backdrop_path
                }`}
                key={index}
                alt={movie.name}
                className={`row_poster ${isLargeRow && "row_posterLarge}"} `}
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
}
