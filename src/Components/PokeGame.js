import React, { Component } from "react";
import PokeDeck from "./PokeDeck";

class PokeGame extends Component {
  static defaultProps = {
    pokemon: [
      { id: 4, name: "Charmander", type: "fire", base_experience: 62 },
      { id: 7, name: "Squirtle", type: "water", base_experience: 63 },
      { id: 11, name: "Metapod", type: "bug", base_experience: 72 },
      { id: 12, name: "Butterfree", type: "flying", base_experience: 178 },
      { id: 25, name: "Pikachu", type: "electric", base_experience: 112 },
      { id: 39, name: "Jigglypuff", type: "normal", base_experience: 95 },
      { id: 94, name: "Gengar", type: "poison", base_experience: 225 },
      { id: 133, name: "Eevee", type: "normal", base_experience: 65 }
    ]
  };
  render() {
    let hand1 = this.props.pokemon;
    let hand2 = [];
    while (hand1.length !== hand2.length) {
      let randIndx = Math.floor(Math.random() * hand1.length);
      hand2.push(hand1.splice(randIndx, 1)[0]);
    }
    let xp1 = hand1.reduce((exp, current) => exp + current.base_experience, 0);
    let xp2 = hand2.reduce((exp, current) => exp + current.base_experience, 0);

    return (
      <div className="container">
        <h1>POKEMON GAME</h1>
        <PokeDeck pokemons={hand1} xp={xp1} isWinner={xp1 > xp2} />
        <PokeDeck pokemons={hand2} xp={xp2} isWinner={xp2 > xp1} />
      </div>
    );
  }
}

export default PokeGame;
