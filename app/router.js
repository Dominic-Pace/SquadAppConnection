import React from 'react';
import { AppRegistry } from 'react-native'
import { DrawerNavigator } from 'react-navigation';

import Auth from './core/auth/router'

const Router = DrawerNavigator({
  Auth: {
    screen: Auth,
  },
});

export default Router;

AppRegistry.registerComponent('Router', () => Router);
