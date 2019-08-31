import React, { Component } from "react";
import { Grid, Cell, List, ListItem, ListItemContent } from "react-mdl";
import Perfil from "../assets/images/perfilP.png";

class Contact extends Component {
  render() {
    return (
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Jorge Velasquez</h2>
            <img src={Perfil} alt="avatar" style={{ height: "250px" }} />
            <p
              style={{
                width: "90%",
                margin: "auto",
                paddingTop: "1em",
                textAlign: "justify",
                color: "white",
                fontFamily: "Lato"
              }}
            >
              Soy una persona comprometida y con mucha responsabilidad. Una de
              mis metas, es ser líder de proyectos y pertenecer a grandes
              equipos que desarrollan soluciones digitales alrededor del mundo.
              Por mi faceta en la vida Militar, tengo gran habilidad para
              trabajar en equipo, bajo presión y con muchas capacidades de
              liderazco.
            </p>
          </Cell>
          <Cell col={6}>
            <h2>Contáctame</h2>
            <hr />
            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent
                    style={{
                      fontSize: "30px",
                      fontFamily: "Anton"
                    }}
                  >
                    <i className="fa fa-phone-square" aria-hidden="true" />
                    (057) 321-720-9185
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent
                    style={{ fontSize: "30px", fontFamily: "Anton" }}
                  >
                    <i className="fa fa-whatsapp" aria-hidden="true" />
                    (057) 321-720-9185
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent
                    style={{ fontSize: "30px", fontFamily: "Anton" }}
                  >
                    <i className="fa fa-envelope" aria-hidden="true" />
                    jorgevelasquez006@hotmail.com
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent
                    style={{ fontSize: "30px", fontFamily: "Anton" }}
                  >
                    <i className="fa fa-twitter" aria-hidden="true" />
                    @jorgevvel
                  </ListItemContent>
                </ListItem>
              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Contact;
