import React from "react";
import "./pokemon.scss"


export default function Pokemon(props) {
  return (
    <div className="card shadow-sm mb-4">
      <div className= "pokemon card-body pb-0">
        <h5 className="card-title">Pokemon name: {props.name}</h5>
        <h6 className="card-subtitle mb-3 text-primary">Awesome: {props.awesome ? "yeah !" : " ugly"}</h6>
        <p className="mb-0">Weight: {props.weight} kg</p>
        <p>Terrifying: {props.terrifying ?  "A lot !" : " noooooooo"}</p>
        <p>Abilities : ({props.abilities.length}) </p> 
      </div>
     
      <ul className="list-group list-group-flush">
      {props.abilities.map(abilitie=>{
        return <li className="Abi list-group-item">{abilitie}</li>
      })}
      </ul>
    </div>
  );
}

