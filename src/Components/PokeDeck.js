import React, { Component } from "react";
import PokeCard from "./PokeCard";

import "../styles/PokeDeck.css";

class PokeDeck extends Component {
  render() {
    let result = "";
    this.props.isWinner
      ? (result = "Yahhoo, This hands wins!")
      : (result = "Ehh, This hand losses.");
    return (
      <div>
        <div
          className={`PokeDeck-header ${
            this.props.isWinner ? "PokeDeck-winner" : "PokeDeck-looser"
          }`}
        >
          <h4>{result}</h4>
          <h4>XP -> {this.props.xp}</h4>
        </div>
        <div className="PokeDeck-row">
          {this.props.pokemons.map(p => (
            <PokeCard
              id={p.id}
              name={p.name}
              type={p.type}
              xp={p.base_experience}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default PokeDeck;
