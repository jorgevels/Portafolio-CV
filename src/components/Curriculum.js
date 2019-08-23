import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import Education from "./Educacion";
import Experience from "./Experiencia";
import Skills from "./Habilidades";
import SkillsInfo from "./HabilidadesInfo";
import Perfil from "../assets/images/perfilP.png";

class Resume extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Cell className="resume-right" col={4}>
            <div style={{ textAlign: "center" }}>
              <img
                src={Perfil}
                alt="avatar"
                style={{
                  height: "200px"
                }}
              />
            </div>

            <h2
              style={{
                paddingTop: "0.1em",
                textAlign: "center",
                fontFamily: "Lato",
                color: "black"
              }}
            >
              Jorge Velasquez
            </h2>
            <h4
              style={{
                paddingTop: "1px",
                margin: "0",
                color: "white",
                textAlign: "center",
                fontFamily: "Lato"
              }}
            >
              Frontend Developer
            </h4>
            <hr
              style={{
                borderTop: "3px dotted #1e5372",
                width: "100%",
                margin: "2px",
                marginBottom: "2px"
              }}
            />
            <p
              style={{
                width: "95%",
                color: "white",
                margin: "auto",
                paddingTop: "0.1em",
                fontFamily: "Lato"
              }}
            >
              Mi nombre es Jorge, soy Frontend Developer y vivo en la ciudad de
              Medellin. Mi lenguaje de programación favorito es React, con él he
              aprendido mucho y actualmente me encuentro desarrollando la
              Carrera de Frontend con React en Platzi.
            </p>
            <hr
              style={{
                borderTop: "3px dotted #1e5372",
                width: "100%",
                margin: "2px",
                marginBottom: "2px"
              }}
            />
            <div className="resumen-social-links">
              <a
                href="https://www.google.com"
                rel="noopener noreferrer"
                target="_blank"
              >
                <i className="fa fa-linkedin-square" aria-hidden="true" />
              </a>
              <a
                href="https://www.google.com"
                rel="noopener noreferrer"
                target="_blank"
              >
                <i className="fa fa-github-square" aria-hidden="true" />
              </a>
              <a
                href="https://www.google.com"
                rel="noopener noreferrer"
                target="_blank"
              >
                <i className="fa fa-youtube-square" aria-hidden="true" />
              </a>
              <a
                href="https://www.google.com"
                rel="noopener noreferrer"
                target="_blank"
              >
                <i className="fa fa-facebook-square" aria-hidden="true" />
              </a>
            </div>
            <hr
              style={{
                borderTop: "3px dotted #1e5372",
                width: "100%",
                margin: "2px",
                marginBottom: "2px"
              }}
            />
            <h6
              style={{
                color: "white",
                fontSize: "12px",
                fontFamily: "Lato",
                textAlign: "center",
                margin: "2px",
                marginBottom: "2px"
              }}
            >
              Hecho con <i className="fa fa-heart" aria-hidden="true" /> © 2019
            </h6>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Educación</h2>
            <Education
              startYear={2013}
              endYear={2018}
              schoolName="Universidad UniRemington"
              schoolDescription="Estudie Ingenieria de Sistemas y en el ultimo semestre realice un diplomado en Seguridad de la Informacion."
            />
            <Education
              startYear={2019}
              endYear={2020}
              schoolName="Platzi"
              schoolDescription="Realice la Carrera de Arquitectura Frontend y Frontend con React"
            />
            <hr
              style={{
                borderTop: "3px dotted #1e5271",
                width: "100%",
                margin: "2px",
                marginBottom: "2px"
              }}
            />
            <h2>Experiencia laboral</h2>
            <Experience
              startYear={2000}
              endYear={2018}
              jobName="Primer trabajo"
              jobDescription="Ingrese a las Fuerzas Militares como soldado Regular, posteriormente ascendi a Soldado Profesional y en los ultimos 8 años me desempeñe como Jefe de TIC'S en el Gaula Militar del Oriente Antioqueño"
            />
            <hr
              style={{
                borderTop: "3px dotted #1e5271",
                width: "100%",
                margin: "2px",
                marginBottom: "2px"
              }}
            />
            <h2>Habilidades</h2>
            <SkillsInfo skillIf="Durante mi formación como Ingeniero de Sistemas y Arquitecto Frontend, he desarrollado varios proyectos con: JavaScript, Html5, Sass, Css3, GitHub y React. Además, he utilizado los frameworks de Bootstrap y Materialize para crear productos funcionales con una muy buena experiencia de usuario." />
            <Skills skil1={`JavaScript:${"  "}60%`} progress={60} />
            <Skills skil2={`HTML: 80%`} progress={80} />
            <Skills skil3={`CSS: 70%`} progress={70} />
            <Skills skil4={`GitHub: 70%`} progress={80} />
            <Skills skil5={`React: 40%`} progress={40} />
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Resume;
