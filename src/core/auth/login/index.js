import React, { Component } from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { connect } from 'react-redux';
import {  Container } from 'native-base';
import { Row, Grid } from 'react-native-easy-grid';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import * as actions from '../actions'
import TopStatusBar from '../../../components/generic/top-status-bar'
import SquadLogo from './squad-logo'
import SignInForm from './sign-in-form'
import SignUp from './sign-up'

import authBg from '../../../assets/images/SquadBG.png';

import styles from './styles'

class Login extends Component {

  navToPosts() {
    this.props.navigation.navigate('Posts');
  }

  render() {
    console.log('props', this.props)
    return (
      <Container style={styles.container}>
        <TopStatusBar hidden={true} />
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

const mapStateToProps = ({ auth }) => {
  const {
    isRequesting
  } = auth
  return {
    isRequesting
  }
}
export default connect(mapStateToProps, { ...actions })(Login)