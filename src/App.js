import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Layout, Header, Navigation, Drawer, Content } from "react-mdl";
import Main from "./components/main";
import { Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
        <Layout>
          <Header
            className="header-color"
            title={
              <Link
                style={{
                  textDecoration: "none",
                  color: "white"
                }}
                to="/"
              >
                <i className="fa fa-briefcase" />
                Mi Portafolio
              </Link>
            }
            scroll
          >
            <Navigation>
              <Link to="/curriculum">Currículum</Link>
              <Link to="/acercademi">Acerca de mi</Link>
              <Link to="/proyectos">Proyectos</Link>
              <Link to="/contacto">Contacto</Link>
            </Navigation>
          </Header>

          <Drawer
            title={
              <Link
                style={{
                  drawerType: "slide",
                  textDecoration: "none",
                  color: "black",
                  fontFamily: "Lato"
                }}
                to="/"
              >
                {" "}
                <i className="fa fa-briefcase" />
                Mi Portafolio
              </Link>
            }
          >
            <Navigation>
              <Link to="/curriculum">
                <i className="fa fa-graduation-cap" aria-hidden="true" />
                Currículum{" "}
              </Link>
              <Link to="/acercademi">
                {" "}
                <i className="fa fa-user" aria-hidden="true" />
                Acerca de mi
              </Link>
              <Link to="/proyectos">
                {" "}
                <i className="fa fa-building" aria-hidden="true" />
                Projectos
              </Link>
              <Link to="/contacto">
                {" "}
                <i className="fa fa-id-card" aria-hidden="true" />
                Contacto
              </Link>
            </Navigation>
          </Drawer>

          <Content>
            <div className="page-content" />

            <Main />
          </Content>
        </Layout>
      </div>
    );
  }
}

export default App;
