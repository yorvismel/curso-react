import React, { Component } from "react";

export default class Eventos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contador: 0,
    };
    this.sumar = this.sumar.bind(this);
  }

  sumar(e) {
    console.log("sumando");
    console.log("this");
    this.setState({
      contador: this.state.contador + 1,
    });
  }
  render() {
    return (
      <div>
        <h1>Eventos en Componentes de Clase</h1>
        <h3>
          <bold>Esto es un contador : </bold>
          {this.state.contador}
        </h3>
        <nav>
          <button onClick={this.sumar}>+</button>
          <button>-</button>
        </nav>
      </div>
    );
  }
}
