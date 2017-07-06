/* NOTE
  all one-line star comments starting with "eslint", "global", or "NOTE"
  will be removed before displaying this document to the user
*/
/* global React, ReactDOM, App, mountNode */
/* global VictoryChart, VictoryStack, VictoryScatter, VictoryArea, VictoryGroup, VictoryPortal */

class App extends React.Component {
  render() {
    return (
      <div>
        <VictoryChart scale={{x: "time"}} width={400} height={400}>
          <VictoryStack colorScale="warm">
            <VictoryGroup
              data={[
                {x: new Date(1986, 1, 1), y: 2},
                {x: new Date(1996, 1, 1), y: 3},
                {x: new Date(2006, 1, 1), y: 5},
                {x: new Date(2016, 1, 1), y: 4}
              ]}
            >
              <VictoryArea/>
              <VictoryPortal>
                <VictoryScatter
                  style={{ data: {fill: "black"}}}
                />
              </VictoryPortal>
            </VictoryGroup>
            <VictoryGroup
              data={[
                {x: new Date(1986, 1, 1), y: 4},
                {x: new Date(1996, 1, 1), y: 3},
                {x: new Date(2006, 1, 1), y: 2},
                {x: new Date(2016, 1, 1), y: 5}
              ]}
            >
              <VictoryArea/>
             <VictoryPortal>
                <VictoryScatter
                  style={{ data: {fill: "black"}}}
                />
              </VictoryPortal>
            </VictoryGroup>
            <VictoryGroup
              data={[
                {x: new Date(1986, 1, 1), y: 3},
                {x: new Date(1996, 1, 1), y: 1},
                {x: new Date(2006, 1, 1), y: 4},
                {x: new Date(2016, 1, 1), y: 2}
              ]}
            >
              <VictoryArea/>
              <VictoryPortal>
                <VictoryScatter
                  style={{ data: {fill: "black"}}}
                />
              </VictoryPortal>
            </VictoryGroup>
          </VictoryStack>
        </VictoryChart>
      </div>
    );
  }
}

ReactDOM.render(<App/>, mountNode);
