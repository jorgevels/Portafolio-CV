import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class Experience extends Component {
  render() {
    return (
      <div className="experiencia">
        <Grid className="experiencia-grid">
          <Cell col={2}>
            <p>
              {this.props.startYear} - {this.props.endYear}
            </p>
          </Cell>
          <Cell col={10}>
            <h4 style={{ marginTop: "0px" }}>{this.props.jobName}</h4>
            <p style={{ textAlign: "justify" }}>{this.props.jobDescription}</p>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Experience;
