import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class Education extends Component {
  render() {
    return (
      <div className="educacion">
        <Grid>
          <Cell className="educacion-años" col={2}>
            <p style={{ marginTop: "0px", margin: "-2px" }}>
              {this.props.startYear} - {this.props.endYear}
            </p>
          </Cell>
          <Cell className="educacion-descripcion" col={10}>
            <h4 style={{ marginTop: "0px", margin: "-2px" }}>
              {this.props.schoolName}
            </h4>
            <p> {this.props.schoolDescription}</p>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Education;
