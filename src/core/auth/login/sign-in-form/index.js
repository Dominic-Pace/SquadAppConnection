import React from 'react'
import { Image, View } from 'react-native';

import TextField from '../../../../components/generic/text-input';
import Disclaimer from './disclaimer'
import SignInButton from './button'

import styles from '../styles'
import { squadBlue, squadGreen } from '../../../../styles'

const focusNextField = (nextField) => {
  this[nextField].focus();
}

const SignInForm = ({ handleClick }) => (
  <View style={styles.formContainer}>
    <TextField
      autocorrect={false}
      label={'Email'}
      keyboardType="email-address"
      highlightColor={squadBlue}
      returnKeyType="next"
      onSubmitEditing={() => focusNextField('passwordInput')}
      wrapperStyle={styles.textField}
    />
    <TextField
      autocorrect={false}
      label={'Password'}
      highlightColor={squadGreen}
      secureTextEntry={true}
      onSubmitEditing={handleClick}
      ref={(ref) => { this.passwordInput = ref; }}
      wrapperStyle={styles.textField}
    />
    <Disclaimer>
        By signing in, you certify that you are at least 18 years old and agree to SQUADs Terms of Service and Privacy Policy
    </Disclaimer>
    <SignInButton handleClick={handleClick}>SIGN IN</SignInButton>
  </View>
)

export default SignInForm
