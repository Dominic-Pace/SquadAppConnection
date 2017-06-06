import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { Row } from 'react-native-easy-grid'

import styles from '../styles'

const SignUp = () => (
  <Row size={1} style={styles.signUpContainer}>
    <Text style={styles.whiteText}>
      Don't have an account?
    </Text>
    <TouchableOpacity style={styles.signUpBtn}>
      <Text style={styles.signUpText}>
        Sign Up Today!
      </Text>
    </TouchableOpacity>
  </Row>
)

export default SignUp
