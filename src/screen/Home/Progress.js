import React, { Component } from "react";
import ProgressCircle from "react-native-progress-circle";
import { Text, Card } from "@ui-kitten/components";

export default class Progress extends Component {
  render() {
    const { steps, tobetraveld, DeviceWidth } = this.props;
    return (
      <Card
        style={{
          marginVertical: 10,
          marginHorizontal: 20,
          borderRadius: 8,
          alignItems: "center"
        }}
        appearance={"filled"}
      >
        <ProgressCircle
          percent={(steps * 100) / tobetraveld}
          radius={DeviceWidth}
          borderWidth={8}
          color="#00FF00"
          shadowColor="#999"
          bgColor="#fff"
          containerStyle={{ justifyContent: "flex-end" }}
        >
          <Text category="h1">{steps}</Text>
          <Text category="s1" style={{ marginBottom: 20 }}>
            /{tobetraveld}
          </Text>
        </ProgressCircle>
      </Card>
    );
  }
}
