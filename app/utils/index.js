import React from 'react';
import { Platform, StatusBar } from 'react-native';

const TopStatusBar = () => (
  <StatusBar
    backgroundColor="white"
    barStyle="light-content"
    hidden={Platform.OS === 'android'}
  />
);

export default TopStatusBar;
