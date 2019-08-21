import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class SkillsInfo extends Component {
  render() {
    return (
      <div>
        <Grid className="habilidades-grid">
          <Cell col={12}>
            <div
              style={{
                display: "flex",
                marginBottom: "0px",
                textAlign: "justify"
              }}
            >
              {this.props.skillIf}
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default SkillsInfo;
