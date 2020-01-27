import React, { Component } from "react";
import { Layout, Text, Card } from "@ui-kitten/components";
import { CustomHeader } from "./CustomHeaderForCard";
export default class Steps extends Component {
  render() {
    const { steps } = this.props;
    return (
      <Card
        header={CustomHeader("Steps", "home-outline")}
        style={{
          marginVertical: 10,
          marginHorizontal: 20,
          borderRadius: 8,
          alignItems: "center"
        }}
        appearance={"filled"}
      >
        <Layout>
          <Text category="h4">{steps} Steps</Text>
        </Layout>
      </Card>
    );
  }
}
