import axios from 'axios'

import { AUTH_FAILURE, AUTH_REQUEST, AUTH_SUCCESS } from './types'

export const authenticate = (email, password) => {
  const authConfiguration = {
    url: 'http://localhost:3005/v1/auth',
    method: 'post',
    auth: {
      email: email.toLowerCase(),
      password: password,
    }
  }

  return dispatch => {
    dispatch({ type: AUTH_REQUEST })
    return axios.post(authConfiguration.url, authConfiguration.auth)
      .then(res => {
        dispatch({ type: AUTH_SUCCESS, authToken: res.data.data.token, currentUser: res.data.data.user })
      })
      .catch(err => {
        if (err.response) {
          dispatch({ type: AUTH_FAILURE, errorMessage: 'Invalid Username/Password Combination. Please try again.' })
        } else {
          dispatch({ type: AUTH_FAILURE, errorMessage: 'Cannot connect to the server. Please try again later.' })
        }
      })
  }
}