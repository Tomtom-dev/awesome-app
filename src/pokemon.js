import React from "react";

export default function Pokemon() {



  state ={
     allPokemon : [
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
    ]
  }
  

    return (
      <div>
       {this.state.allPokemon.map(pokemon => (
           <Pokemon 
           name= {pokemon.name}
        Weight= {pokemon.weight} kg
        Awesome= {pokemon.Awesome}
        Terrifying= {pokemon.Terrifying}
        Abilities= {pokemon.Abilities}/>
       ))}  
      </div>
  )
  }
  

