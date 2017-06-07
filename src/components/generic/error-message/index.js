import React from 'react'
import { View } from 'react-native'
import { FormValidationMessage } from 'react-native-elements'

import styles from './styles'
import { defaultTypography } from '../../../styles'

const ErrorMessage = ({children}) => (
  <FormValidationMessage
    fontFamily={defaultTypography}
    labelStyle={styles.errorText}
  >
    {children}
  </FormValidationMessage>
)

export default ErrorMessage
