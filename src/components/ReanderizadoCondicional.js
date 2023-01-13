import React, { Component } from "react";

function EnLinea () {
    return (
        <div>
            <h3>Usuario Conectado</h3>
        </div>
    );
};

function FueraDeLinea () {
    return (
        <div>
            <h3>Usuario Desconectado</h3>
        </div>
    )
}

export default class RenderizadoCondicional extends Component {
    constructor(props) {
        super(props);
        this.state = {
            session: false,
        }
    }
    render() {
        return (
            <div>
                <h2>Renderizado Condicional</h2>
                {this.state.session? <EnLinea /> : <FueraDeLinea /> }
                
                
            </div>
        )
    }
}