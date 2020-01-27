import React, { Component } from "react";
import { Layout, Text, Card } from "@ui-kitten/components";
import { CustomHeader } from "./CustomHeaderForCard";
export default class Steps extends Component {
  render() {
    const { steps } = this.props;
    return (
      <Card
        header={CustomHeader("Walking and Running Distance", "home-outline")}
        style={{
          marginVertical: 10,
          marginHorizontal: 20,
          borderRadius: 8,
          alignItems: "center"
        }}
        appearance={"filled"}
      >
        <Layout>
          <Text category="h4">
            {(steps * 0.0002766798418972332).toFixed(2)} Km
          </Text>
        </Layout>
      </Card>
    );
  }
}
