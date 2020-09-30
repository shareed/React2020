import React, { useState, useEffect } from "react";
import PetCard from "./PetCard";
import axios from "axios";

export default function PetGrid() {
  const [pets, setPets] = useState([]);
  const [breed, setBreed] = useState("mix");

  useEffect(() => {
    axios
      .get(`https://dog.ceo/api/breed/${breed}/images/random/12`)
      .then(response => {
        //
         console.log(response)
        setPets(response.data.message);
      })
      .catch(error => {
        console.log("no doggos", error);
      });
  }, [breed]);
  return (
    <div className=" pet container">
      <button onClick={() => setBreed("pug")}>Pug</button>
      <button onClick={() => setBreed("weimaraner")}>Weimaraner</button>
      <button onClick={() => setBreed("husky")}>husky</button>
      <div className="entry">
        {pets.map((pet, index) => {
          return <PetCard key={index} imgUrl={pet} breed={breed} />;
        })}
      </div>
    </div>
  );
}
