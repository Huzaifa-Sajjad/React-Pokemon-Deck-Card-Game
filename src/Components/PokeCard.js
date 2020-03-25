import React, { Component } from "react";
import "../styles/PokeCard.css";

const API = "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/";

let padThree = function(number) {
  if (number <= 999) {
    return `00${number}`.slice(-3);
  } else {
    return number;
  }
};

class PokeCard extends Component {
  render() {
    return (
      <div className="PokeCard-card">
        <div className="PokeCard-cardBody">
          <div className="PokeCard-img">
            <img
              src={`${API}${padThree(this.props.id)}.png`}
              alt={`${this.props.name} Image`}
            />
          </div>
          <h2 className="PokeCard-title">{this.props.name}</h2>
          <h4 className="PokeCard-xp">
            XP: <b>{this.props.xp}</b>
          </h4>
          <h5 className="PokeCard-type">
            Type: <b>{this.props.type}</b>
          </h5>
        </div>
      </div>
    );
  }
}

export default PokeCard;
