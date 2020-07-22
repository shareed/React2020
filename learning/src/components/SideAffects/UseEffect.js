import React from "react";
import MovieList from "./MovieList";
import MovieList2 from "./MovieList2";
import Pet from "./Pet";
import logo from "../../assets/logo.png";


function UseEffect() {
  return (
    <div className="App">
      <div className="logo_container">
        <img className="logo" src={logo} alt="studio ghibli official logo" />
        <h1>API</h1>
        <MovieList />
        <MovieList2 />
        <Pet />
      </div>
    </div>
  );
}

export default UseEffect;
