import React, { Component } from "react";
import {
  Tabs,
  Tab,
  Grid,
  Cell,
  Card,
  CardTitle,
  CardText,
  CardActions,
  Button,
  CardMenu,
  IconButton
} from "react-mdl";
import Simcro from "../assets/images/simcro.png";

class Projects extends Component {
  toggleCategories() {
    return (
      <div className="projects-grid">
        <Card
          shadow={5}
          style={{
            width: "300px",
            margin: "auto",

            alignItems: "center"
          }}
        >
          <img
            src={Simcro}
            alt="avatar"
            className="avatar-img"
            style={{
              height: "370px"
            }}
          />
          <h2>Simcro</h2>
          <CardText>
            SIMCRO es una PWA "Aplicacion web progresiba" desarrollada en Html,
            css y JavaScrip, la cual consume una API de Google maps y permite
            visualizar siertos datos en un mapa de calor.
          </CardText>
          <CardActions
            border
            style={{
              textAlign: "center"
            }}
          >
            <Button href="https://github.com/jorgevels/SIMCRO" colored>
              GitHub{" "}
            </Button>

            <Button href="https://simcro.co" colored>
              website
            </Button>
            <IconButton name="favorites" style={{ color: "red" }} />
          </CardActions>
          <CardMenu style={{ color: "red" }}>
            <IconButton name="share" />
          </CardMenu>
        </Card>

        <Card shadow={5} style={{ width: "450px", margin: "auto" }}>
          <CardTitle
            style={{
              color: "#fff",
              height: "176px",
              background:
                "url(https://scontent.feoh5-1.fna.fbcdn.net/v/t1.0-9/48339939_10213203758836175_2681731017881944064_n.jpg?_nc_cat=102&_nc_oc=AQlVR5NqYv4NaQvxpJDXTdeKZUIpYRacE2a3pZUl_KHVBkOM3qI6eXRec7HhOvfnrYk&_nc_ht=scontent.feoh5-1.fna&oh=d9caab0d207f5f57aad745aaf11342fb&oe=5DD8C6E0) center / cover"
            }}
          >
            Simon Dice
          </CardTitle>
          <CardText>
            Simon Dice es una aplicacion web con caracteristicas de una PWA,
            este Juego consiste en una secuencia de colores que el usuario debe
            recordar para subir de nivel, esta desarrollada en Html y
            JavaScript.
          </CardText>
          <CardActions
            border
            style={{
              textAlign: "center"
            }}
          >
            <Button colored>GitHub</Button>
            {/*  <Button colored>CodePen</Button> */}
            <Button colored>LiveDemo</Button>
            <IconButton name="favorites" style={{ color: "red" }} />
          </CardActions>
          <CardMenu style={{ color: "red" }}>
            <IconButton name="share" />
          </CardMenu>
        </Card>

        <Card shadow={5} style={{ width: "450px", margin: "auto" }}>
          <CardTitle
            style={{
              color: "#fff",
              height: "176px",
              background:
                "url(https://scontent.feoh5-1.fna.fbcdn.net/v/t1.0-9/48333214_10213203760156208_6410662357738979328_n.jpg?_nc_cat=107&_nc_oc=AQlgmren1Cqo0543JMPTBlmygwSl2sv85EF1RFSHGYy_63BoIjyvpPHkqBkMRXutxsA&_nc_ht=scontent.feoh5-1.fna&oh=1017c58e827bb6bc4cbff3c5a74ea1ed&oe=5DD217C9) center / cover"
            }}
          >
            GatStore
          </CardTitle>
          <CardText>
            GatStore es una tienda de gatos, la cual le permite al usuario
            selecionar de una galeria el gatito que mas te guste y desde la
            aplicacion puede gestionar el medio de pago, esta desarrollada en
            html, css y JavaScript.
          </CardText>
          <CardActions
            border
            style={{
              textAlign: "center"
            }}
          >
            <Button colored>GitHub</Button>
            {/*   <Button colored>CodePen</Button> */}
            <Button colored>LiveDemo</Button>
            <IconButton name="favorites" style={{ color: "red" }} />
          </CardActions>
          <CardMenu style={{ color: "red" }}>
            <IconButton name="share" />
          </CardMenu>
        </Card>
      </div>
    );
  }

  render() {
    return (
      <div className="category-tabs">
        <Grid>
          <Cell col={12}>
            <div className="content">{this.toggleCategories()}</div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Projects;
