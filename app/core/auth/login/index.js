import React, { Component } from 'react';
import { Dimensions, Text, View } from 'react-native';

import styles from './styles';

export default class Auth extends Component {
  render() {
    return (
      <View style={styles.backgroundContainer}>
        <Text style={{ fontSize: 30 }}>
          Test Text
        </Text>
      </View>
    )
  }
}