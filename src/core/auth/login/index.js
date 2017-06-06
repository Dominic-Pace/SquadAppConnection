import React, { Component } from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native';
import {  Container } from 'native-base';
import { Row, Grid } from 'react-native-easy-grid';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import SquadLogo from './squad-logo'
import SignInForm from './sign-in-form'
import SignUp from './sign-up'

import authBg from '../../../assets/images/SquadBG.png';

import styles from './styles'

export default class Login extends Component {

  navToPosts() {
    this.props.navigation.navigate('Posts');
  }

  render() {
    return (
      <Container style={styles.container}>
        <Grid>
          <Row size={9} style={styles.centered} >
            <KeyboardAwareScrollView>
              <SquadLogo imgLocation={authBg} />
              <SignInForm handleClick={() => this.navToPosts()}/>
            </KeyboardAwareScrollView>
          </Row>
          <SignUp />
        </Grid>
      </Container>
    )
  }
}