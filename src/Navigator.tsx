import React from 'react';
import {
  createSwitchNavigator,
  createStackNavigator,
  createDrawerNavigator
} from 'react-navigation';
import Home from './Home';

const MainStack = createStackNavigator(
  {
    Home
  },
  {
    defaultNavigationOptions: {
      header: null
    }
  }
);

const MainNavigator = createSwitchNavigator({
  MainStack
});

export default MainNavigator;
