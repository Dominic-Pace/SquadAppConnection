import React from 'react'
import { Text } from 'react-native';
import { Row } from 'react-native-easy-grid'

import styles from '../../styles'

const DisclaimerStatement = ({ children }) => (
  <Row style={styles.disclaimerContainer}>
    <Text style={styles.disclaimerText}>
      {children}
    </Text>
  </Row>
)

export default DisclaimerStatement
