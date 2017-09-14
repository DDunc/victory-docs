import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import {
  VictoryBar, VictoryScatter, VictoryAxis, VictoryLabel, VictoryGroup,
  VictoryChart, VictoryLine, VictoryPie, VictoryArea, Area
} from "victory";
import { random, range } from "lodash";
import EcologyRecipe from "../../../../components/ecology-recipe";
import markdown from "../../../../markdown";
const overview = require("!!raw!./ecology.md");

class CustomComponentGuide extends React.Component {
  static toc() {
    return markdown.parseToc(overview);
  }

  render() {
    return (
      <EcologyRecipe
        overview={overview}
        location={this.props.location}
        scope={{
          random, range, React, ReactDOM, VictoryBar, VictoryScatter, VictoryLine,
          VictoryPie, VictoryChart, VictoryAxis, VictoryGroup, VictoryLabel, VictoryArea, Area
        }}
      />
    );
  }
}

CustomComponentGuide.propTypes = {
  location: PropTypes.object.isRequired
};

export default CustomComponentGuide;
