import React, { Component } from 'react';
import { Dimensions, Image, View } from 'react-native'
import { Grid, Row } from 'react-native-elements'

import TopStatusBar from '../../components/top-status-bar'
import authBg from '../../assets/images/login-or-register-bg.png'
import styles from './styles'
import RoundedButton from '../../components/buttons/rounded'

export default class AuthBasePage extends Component {
  navToLogin() {
    console.log('Navigate To Login');
    this.props.navigation.navigate('Login');
  }

  navToRegister() {
    this.props.navigation.navigate('Login');
  }

  render() {
    console.log('props', this.props)
    return (
        <Image source={authBg} style={styles.bgImage}>
          <TopStatusBar hidden={true} />
          <Grid>
            <Row size={8} />
            <Row size={1}>
              <RoundedButton
                transparent={true}
                onPress={() => this.navToRegister()}
              >
                REGISTER
              </RoundedButton>
            </Row>
            <Row size={1}>
              <RoundedButton
                transparent={false}
                onPress={() => this.navToLogin()}
              >
                LOGIN
              </RoundedButton>
            </Row>
            <Row size={2}/>
          </Grid>
        </Image>
    )
  }
}
