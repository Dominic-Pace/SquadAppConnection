import React from 'react'
import { Image, View } from 'react-native';

import styles from '../styles'

const SquadLogo = ({ imgLocation }) => (
  <View style={styles.centered}>
    <Image source={imgLocation} style={styles.logoImg}/>
  </View>
)

export default SquadLogo
