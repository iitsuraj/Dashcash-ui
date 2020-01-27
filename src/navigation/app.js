import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
// Import Screen Here
import TabNavigator from './BottomNav';

const MainNavigator = createStackNavigator({
  Home: {
    screen: TabNavigator,
    navigationOptions: {
      headerShown: false,
    },
  },
});

export default createAppContainer(MainNavigator);
