import React, { Component } from "react";
import { Grid, Cell, List, ListItem, ListItemContent } from "react-mdl";

class About extends Component {
  render() {
    return (
      <Cell col={5}>
        <div className="acerca-me">
          <h4>Acerca de mi</h4>
          <hr style={{ width: "50%" }} />
          <p style={{ width: "90%", margin: "auto", paddingTop: "1em" }}>
            Mi nombre es Jorge, soy Frontend Developer y vivo en la ciudad de
            Medellin. Mi lenguaje de programación favorito es React, con él he
            aprendido muchas cosas y actualmente me encuentro desarrollando la
            Carrera de Frontend con React en Platzi. Mi objetivo es obtener
            muchisimas habilidades con esta herramienta y asi poder crear
            soluciones tecnológicas a la medida de cualquier necesidad. Estoy
            convencido de que el trabajo en equipo es la mejor forma de avanzar
            en cualquier ambito, trabajo o proyecto. Aun hago parte de las
            fuerzas Militares de Colombia y actualemtne me encuentro en el
            proceso de (PPR-2019) Retiro asistido 2019, el cual lo he
            aprovechado al maximo con una suscripcion Expert en Platzi. Nunca
            parar de Apremder
          </p>
        </div>
      </Cell>
    );
  }
}

export default About;
