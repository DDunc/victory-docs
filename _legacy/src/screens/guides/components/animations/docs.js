import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import { VictoryBar, VictoryScatter, VictoryChart } from "victory";
import { range, random } from "lodash";
import EcologyRecipe from "../../../../components/ecology-recipe";
import markdown from "../../../../markdown";
const overview = require("!!raw!./ecology.md");

class AnimationGuide extends React.Component {
  static toc() {
    return markdown.parseToc(overview);
  }

  render() {
    return (
      <EcologyRecipe
        overview={overview}
        location={this.props.location}
        scope={{ range, random, React, ReactDOM, VictoryBar, VictoryScatter, VictoryChart }}
      />
    );
  }
}

AnimationGuide.propTypes = {
  location: PropTypes.object.isRequired
};

export default AnimationGuide;
