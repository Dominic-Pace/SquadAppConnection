import { StyleSheet } from 'react-native'

import { bgBlue, defaultTypography, deviceWidth, squadGray, squadWhite } from '../../../styles'

const logoSize = deviceWidth * 0.7;
const inputSize = deviceWidth * 0.8;


const styles = {
  btnText: {
    fontFamily: defaultTypography,
    fontSize: 20
  },
  centered: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  container: {
    backgroundColor: bgBlue
  },
  disclaimerContainer: {
    marginBottom: 20,
    marginLeft: 50,
    marginRight: 50,
  },
  disclaimerText: {
    color: squadGray,
    fontFamily: defaultTypography,
    fontSize: 10,
  },
  formContainer: {
    alignItems: 'center',
    marginTop: -50,
  },
  logoImg: {
    height: logoSize,
    width: logoSize,
    paddingTop: 20,
  },
  signInButton: {
    backgroundColor: squadGray,
    marginRight: 50,
    marginLeft: 50,
    marginBottom: 10,
  },
  signUpBtn: {
    marginLeft: 5,
    marginBottom: 1
  },
  signUpContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 30
  },
  signUpText: {
    fontFamily: defaultTypography,
    fontSize: 15,
    color: squadWhite
  },
  textField: {
    width: inputSize
  },
  whiteText: {
    fontFamily: defaultTypography,
    color: squadGray
  }
}

export default styles
