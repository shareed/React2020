import React from "react";
import PetGrid from "./PetGrid";
import "./useeffectpet.css";

function Pet() {
  return (
    <div className="pet">
      <h1>Adopt a Dog</h1>
      <PetGrid />
    </div>
  );
}
export default Pet;