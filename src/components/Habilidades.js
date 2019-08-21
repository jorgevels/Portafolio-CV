import React, { Component } from "react";
import { Grid, Cell, ProgressBar } from "react-mdl";

class Skills extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Cell className="skill-col" col={2}>
            <p>
              {this.props.skil1} {this.props.skil2} {this.props.skil3}
              {this.props.skil4} {this.props.skil5}
            </p>
          </Cell>
          <Cell col={10}>
            <div style={{ display: "flex" }}>
              {""}
              {this.props.skill}
              <ProgressBar
                style={{
                  margin: "1px",
                  width: "100%",
                  alignItems: "center",
                  justifyItems: "center",
                  justifyContent: "center"
                }}
                progress={this.props.progress}
              />
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Skills;
