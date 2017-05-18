import React from 'react';
import { StatusBar } from 'react-native';

const TopStatusBar = ({ bgColor, barStyle, hidden }) => (
  <StatusBar
    backgroundColor={bgColor}
    barStyle={barStyle}
    hidden={hidden}
  />
);

export default TopStatusBar;
