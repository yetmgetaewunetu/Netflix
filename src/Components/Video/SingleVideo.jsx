import React, { useState, useEffect } from "react";
import classes from "./Video.module.css";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";
import { useParams } from "react-router-dom";

import { useLocation } from "react-router-dom";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export default function SingleVideo() {
  const [trailerUrl, setTrailerUrl] = useState("");
  const [error, setError] = useState(false);
  const { id } = useParams();

  const query = useQuery();
  const title = query.get("title");
  function handleClick(title) {
    try {
      if (trailerUrl) {
        setTrailerUrl("");
      } else {
        movieTrailer(title)
          .then((url) => {
            const urlParams = new URLSearchParams(new URL(url).search);
            setTrailerUrl(urlParams.get("v"));
          })
          .catch((error) => {
            setError(true);
          });
      }
    } catch (error) {
      console.log(error.message);
    }
  }
  useEffect(() => {
    handleClick(id);
  }, []); // This effect will run when 'id' or 'trailerUrl' changes

  const opts = {
    height: "600",
    width: "50%",
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <div className={classes.container}>
      {error ? (
        <div className={classes.notavailable}>
          <h1>
            sorry! <br />
            The trailer is not available at the moment!
          </h1>
        </div>
      ) : (
        <div className={classes.available}>
          <div c style={{ padding: "40px" }}>
            {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
          </div>
          <div className={classes.desc}>
            <h2>Overview</h2>
            <p>{title}</p>
            <span>enjoy the movie!</span>
          </div>
        </div>
      )}
    </div>
  );
}
