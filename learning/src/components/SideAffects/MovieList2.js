import React, { useState, useEffect } from "react";
import axios from "axios";
import MovieCard from "./MovieCard";
import "./useeffect.css";


export default function MovieList2() {
  const [films, setFilms] = useState([]);
  useEffect(() => {
    axios
      .get("https://ghibliapi.herokuapp.com/films/")
      .then(response => {
        console.log(response.data);
        setFilms(response.data);
      })
      .catch(error => {
        console.log("the data was not returned", error);
      });
  }, []);
  return (
    <div className="film">
      {films.map(film => {
        return (
          <MovieCard
            title={film.title}
            desc={film.description}
            director={film.director}
            releaseDate={film.release_date}
          />
        );
      })}
    </div>
  );
}
