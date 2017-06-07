import React, { Component } from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { connect } from 'react-redux';
import {  Container } from 'native-base';
import { Row, Grid } from 'react-native-easy-grid';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Spinner from 'react-native-loading-spinner-overlay'

import * as actions  from '../actions'
import TopStatusBar from '../../../components/generic/top-status-bar'
import SquadLogo from './squad-logo'
import SignInForm from './sign-in-form'
import SignUp from './sign-up'

import authBg from '../../../assets/images/SquadBG.png';

import styles from './styles'

class Login extends Component {
  state = {
    email: '',
    password: '',
  }

  handleTextChange(e, field) {
    const { value } = e.target;
    this.setState({ [field]: value })
  }

  navToPosts() {
    let { email, password } = this.state
    this.props.authenticate(email, password)
      .then(() => {
        if (this.props.isAuthenticated && this.props.currentUser !== null ) {
          this.props.navigation.navigate('Posts');
        }
      })
  }

  render() {
    const { errorMessage, isRequesting } = this.props
    return (
      <Container style={styles.container}>
        <TopStatusBar hidden={true} />
        <Spinner visible={isRequesting} />
          <Grid>
          <Row size={9} style={styles.centered} >
            <KeyboardAwareScrollView>
              <SquadLogo imgLocation={authBg} />
              <SignInForm
                changeEmailText={(text) => this.setState({email: text})}
                changePasswordText={(text) => this.setState({password: text})}
                emailValue={this.state.email}
                passwordValue={this.state.password}
                errorMsg={errorMessage}
                handleClick={() => this.navToPosts()}
              />
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
    authToken,
    errorMessage,
    isRequesting,
    isAuthenticated,
    currentUser,
  } = auth
  return {
    authToken,
    errorMessage,
    isRequesting,
    isAuthenticated,
    currentUser,
  }
}
export default connect(mapStateToProps, { ...actions })(Login)