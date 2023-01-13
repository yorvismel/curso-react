import React, { Component } from "react";
import data from "../helpers/Data.json";

function ElementoDeLista(props) {
  return (
    <li>
      <a href={props.el.web}target="_blank" rel="noreferrer">{props.el.name}</a>
    </li>
  );
}

export default class RederizadoElementos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      season: ["Primavera", "Verano", "Otoño", "Invierno"],
    };
  }
  render() {
    console.log(data);
    return (
      <div>
        <h2>Renderizado de Elementos</h2>
        <h3>Estacions del año</h3>
        <ol>
          {this.state.season.map((el) => (
            <li key={el}>{el}</li>
          ))}
        </ol>
        <h3> Frameworks Frontend JavaScript</h3>
        <ul>
          {data.frameworks.map((el) => (
            <ElementoDeLista key={el.id} el={el} />
          ))}
        </ul>
      </div>
    );
  }
}
