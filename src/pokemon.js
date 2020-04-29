import React from "react";

export default function Pokemon() {
  const allPokemon = [
    {
    name: "Charizard",
    Weight: 90,
    Awesome: true,
    Terrifying: false,
    Abilities: "Blaze, Solar power, Tough claws, Drought",
    },
    {
    name: "Bulbasaur",
    Weight: 6.9,
    Awesome: true,
    Terrifying: false,
    Abilities: "	Overgrow, Chlorophyll",
    },
      {
    name: "Mewtwo",
    Weight: 122,
    Awesome: true,
    Terrifying: true,
    Abilities: "Pressure, Unnerve, Steadfast, Insomnia",
},
      {
    name: "Charizard",
    Weight: 65,
    Awesome: false,
    Terrifying: true,
    Abilities: "Intimidate, Unnerve",
    },
  ];

  return (
    <div>
      <h2>Pokemon name: {allPokemon.name}</h2>
      <p>Weight: {80} kg</p>
      <p>Awesome: {true ? "YES!" : "nope, not really"}</p>
      <p>Terrifying: {false ? "Very" : "nah, lovable"}</p>
      <p>Abilities: {"crevette"}</p>
    </div>
  );
}
