import React from "react";


export default function Pokemon(props) {
  return (
    <div>
      <h2>Pokemon name: {props.name}</h2>
      <p>Weight: {props.weight} kg</p>
      <p>Awesome: {props.awesome ? "yes" : "no"}</p>
      <p>Terrifying: {props.terrifying ?  "yes" : "no"}</p>
      <p>Abilities : ({props.abilities.length}) </p> 
      <ul>
      {props.abilities.map(abilitie=>{
        return <li>{abilitie}</li>
      })}
      </ul>
    </div>
  );
}