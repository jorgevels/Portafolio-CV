import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import Perfil from "../assets/images/perfilP.png";

class Landingpage extends Component {
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              //src="https://cdn1.iconfinder.com/data/icons/user-pictures/101/malecostume-512.png"
              src={Perfil}
              alt="avatar"
              className="avatar-img"
              style={{
                height: "200px"
              }}
            />
            <div className="banner-text">
              <h1>Frontend Developer</h1>
              <hr />
              <p>
                HTML/CSS | Bootstrap | Javascript | React | NodeJS | GitHub{" "}
              </p>
              <div className="social-links">
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
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Landingpage;
