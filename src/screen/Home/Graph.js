import React, { Component } from "react";
import { Layout, Card } from "@ui-kitten/components";
import {
  VictoryLine,
  VictoryChart,
  VictoryTheme,
  VictoryGroup
} from "victory-native";

import { CustomHeader } from "./CustomHeaderForCard";
export default class Graph extends Component {
  render() {
    const { itemWidth } = this.props;
    const data = [
      { quarter: 0, earnings: 0 },
      { quarter: 1, earnings: 2 },
      { quarter: 2, earnings: 3 },
      { quarter: 3, earnings: 1 },
      { quarter: 4, earnings: 2 }
    ];
    const data2 = [
      { quarter: 0, earnings: 0 },
      { quarter: 1, earnings: 1 },
      { quarter: 2, earnings: 2 },
      { quarter: 3, earnings: 4 },
      { quarter: 4, earnings: 3 }
    ];
    return (
      <Card
        header={CustomHeader("Graph", "home-outline")}
        style={{
          marginVertical: 10,
          marginHorizontal: 20,
          borderRadius: 8,
          alignItems: "center",
          paddingBottom: 10
        }}
        appearance={"filled"}
      >
        <Layout>
          <VictoryChart
            domainPadding={{ x: 40 }}
            width={itemWidth}
            theme={VictoryTheme.material}
          >
            <VictoryGroup colorScale={"qualitative"}>
              <VictoryLine data={data} x="quarter" y="earnings" />
              <VictoryLine data={data2} x="quarter" y="earnings" />
            </VictoryGroup>
          </VictoryChart>
        </Layout>
      </Card>
    );
  }
}
