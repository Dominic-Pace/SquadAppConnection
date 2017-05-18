import React from 'react'
import { Button, Text } from 'native-base'

import styles from './styles'

const RoundedButton = ({children, onPress, transparent }) => (
  <Button bordered full transparent={transparent}
    style={transparent ? styles.transparentButton : styles.whiteButton }
    title={children.toLowerCase()}
    onPress={onPress}
  >
    <Text style={transparent ? styles.whiteText : styles.transparentText }>{children}</Text>
  </Button>
)

export default RoundedButton;
