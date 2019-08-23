import React, { Component } from "react";
import { Grid, Cell, List, ListItem, ListItemContent } from "react-mdl";
import Image1 from "../assets/images/dev.png";
/* import Image2 from "../assets/images/dev1.png"; */
import Image3 from "../assets/images/responsi.png";
import Image4 from "../assets/images/te.png";
import Image5 from "../assets/images/curioso.png";
class About extends Component {
  render() {
    return (
      <div className="acerca-mi-body">
        <Grid className="acerca-mi-grid">
          <Cell col={6}>
            <div className="acerca-me">
              <h4>Acerca de mi</h4>

              <p style={{ fontFamily: "Lato" }}>
                Soy convencido de que el trabajo en equipo es la mejor forma de
                avanzar en cualquier ambito, trabajo o proyecto. Aun hago parte
                de las fuerzas Militares de Colombia y actualemtne me encuentro
                en el proceso de (PPR-2019) Retiro asistido 2019, el cual lo he
                aprovechado al maximo con una suscripcion Expert en Platzi.
                Nunca parar de Apremder
              </p>
            </div>
          </Cell>

          <img
            src={Image4}
            alt="avatar"
            style={{
              height: "250px",
              justifyContent: "center",
              alignItems: "center",
              marginLeft: "110px",
              marginTop: "20px"
            }}
          />
          <i className="fa fa-apple" aria-hidden="true" />

          <Cell col={7}>
            <div className="acerca-me">
              <h4>Un curioso por aprender</h4>

              <p style={{ fontFamily: "Lato" }}>
                En mi camino de formación he desarrollado diversas capacidades
                que me han impulsado siempre a mejorar en cada proyecto, las más
                destacadas son : Creatividad, Autoaprendizaje, Proactividad,
                Responsabilidad, Trabajo en Equipo y Compromiso. Soy un curioso
                por aprender.
              </p>
            </div>

            <img
              src={Image5}
              alt="avatar"
              style={{
                height: "200px",
                marginTop: "20px",
                marginLeft: "40px"
              }}
            />
          </Cell>
          <Cell col={5}>
            <div className="acerca-me-tres">
              <h4>Nunca Parar de Aprender</h4>

              <p style={{ fontFamily: "Lato" }}>
                Soy un apacionado por el aprendizaje continuo, me gusta
                experimentar nuevas tegnologias y estar a la bangurdia. Mi
                curiosida por aprender me ha llevado a lograr lo que me he
                propuesto.
                <br /> El aprendizaje no debería acabarse cuando finalizas un
                “ciclo académico”, cuando acabas el colegio o terminas la
                universidad. Hoy más que nunca necesitamos leer, escuchar,
                debatir, crear con lo que aprendemos cada día.
              </p>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default About;
