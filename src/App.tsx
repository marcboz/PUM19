import React, { Component } from 'react';
import { View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { Provider } from 'react-native-paper';
import Navigator from './Navigator';

const AppNavigator = createAppContainer(Navigator);
export default class App extends Component {
  render() {
    return (
      <Provider>
        <View style={{ flex: 1, background: '#f9f9f9' }}>
          <AppNavigator />
        </View>
      </Provider>
    );
  }
}
