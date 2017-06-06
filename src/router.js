import React from 'react';
import { AppRegistry } from 'react-native'
import { StackNavigator } from 'react-navigation';

import Auth from './core/auth/router'

const Router = StackNavigator({
  Auth: {
    screen: Auth,
  }
}, {
  headerMode: 'none'
});

export default Router;

AppRegistry.registerComponent('Router', () => Router);
