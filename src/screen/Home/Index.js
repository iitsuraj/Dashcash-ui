import React, {Component} from 'react';
import {StyleSheet, ScrollView, Dimensions, SafeAreaView} from 'react-native';

import {createStackNavigator} from 'react-navigation-stack';
import {Layout, Card, Text} from '@ui-kitten/components';
import Header from '../../components/Header';

import Graph from './Graph';
import Steps from './Steps';
import Distance from './Distance';
import Progress from './Progress';

const DeviceWidth = Math.round(Dimensions.get('window').width / 5);
const {width} = Dimensions.get('window');
const itemWidth = (width * 80) / 100;

class HomeScreen extends Component {
  constructor() {
    super();
    this.state = {
      todaytraveld: 0,
      tobetraveld: 6000,
    };
  }
  componentDidMount() {
    // Pedometer.isAvailableAsync().then(
    //   result => {
    //     this.interval = setInterval(() => this.UpdateSteps(), 2000);
    //   },
    //   error => {
    //     alert(error);
    //   }
    // );
    this.interval = setInterval(() => this.UpdateSteps(), 2000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  UpdateSteps() {
    // const end = new Date();
    // const start = new Date();
    // start.setHours(0, 0, 0, 0);
    // Pedometer.getStepCountAsync(start, end).then(
    //   result => {
    //     this.setState({ todaytraveld: result.steps });
    //   },
    //   error => {
    //     alert(error);
    //   }
    // );
    this.setState({todaytraveld: this.state.todaytraveld + 2});
  }
  static navigationOptions = ({navigation}) => {
    //return header with Custom View which will replace the original header
    return {
      header: <Header title="Home" />,
    };
  };
  render() {
    return (
      <React.Fragment>
        <Layout style={styles.container} level="3">
          <SafeAreaView>
            <ScrollView>
              <Progress
                steps={this.state.todaytraveld}
                tobetraveld={this.state.tobetraveld}
                DeviceWidth={DeviceWidth}
              />
              <Steps steps={this.state.todaytraveld} />
              <Distance steps={this.state.todaytraveld} />
              <Graph itemWidth={itemWidth} />
            </ScrollView>
          </SafeAreaView>
        </Layout>
      </React.Fragment>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  layout: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
// export default HomeScreen;
export default createStackNavigator({HomeScreen}, {headerMode: 'screen'});
