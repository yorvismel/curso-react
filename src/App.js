import React from "react";
import logo from "./logo.svg";
import Componente from "./components/Componente";
import Probar from "./components/otro-componente";
import Suma from "./components/Nuevo-componente";
import CualEsMiNombre from "./components/Ultimo";
import RenderizadoCondicional from "./components/ReanderizadoCondicional";
import RederizadoElementos from "./components/RenderizadoElementos";
import Eventos from "./components/Eventos";
import CicloVida from "./components/CicloVida";
import "./App.css";

function App() {
  return (
    <div className="App">
      <section>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <section>
            <Componente></Componente> <hr />
            <Probar></Probar> <hr />
            <Suma></Suma> <hr />
            <CualEsMiNombre></CualEsMiNombre> <hr />
            <RenderizadoCondicional></RenderizadoCondicional> <hr />
            <RederizadoElementos /> <hr />
            <Eventos></Eventos> <hr />
            <CicloVida></CicloVida> <hr />
          </section>
        </header>
      </section>
    </div>
  );
}

export default App;
