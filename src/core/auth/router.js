import React from 'react';
import { AppRegistry } from 'react-native'
import { StackNavigator } from 'react-navigation';

import Login from './login'
import Posts from './posts'

const AuthRouter = StackNavigator({
  Login: {
    screen: Login,
  },
  Posts: {
    screen: Posts,
  }
}, {
  mode: 'modal',
  headerMode: 'none',
});

export default AuthRouter;

AppRegistry.registerComponent('AuthRouter', () => AuthRouter);
