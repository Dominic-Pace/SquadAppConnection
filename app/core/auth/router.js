import React from 'react';
import { AppRegistry } from 'react-native'
import { StackNavigator } from 'react-navigation';

import Auth from './index'
import Login from './login'

const AuthRouter = StackNavigator({
  AuthBase: {
    screen: Auth,
  },
  Login: {
    screen: Login,
  },
}, {
  mode: 'modal',
  headerMode: 'none',
});

export default AuthRouter;

AppRegistry.registerComponent('AuthRouter', () => AuthRouter);
