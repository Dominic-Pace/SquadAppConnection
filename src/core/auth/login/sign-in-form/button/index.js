import React from 'react'
import { Text } from 'react-native';
import { Button } from 'native-base';

import styles from '../../styles'

const SignInButton = ({ children, handleClick }) => (
    <Button block
      style={styles.signInButton}
      onPress={handleClick}
    >
      <Text style={styles.btnText}>{children}</Text>
    </Button>
)

export default SignInButton
