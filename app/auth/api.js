'use strict'

const config = require('../config')
const store = require('../store')

const signUp = function (formData) {
  return $.ajax({
    url: config.apiUrl + '/sign-up',
    method: 'POST',
    data: formData
  })
}

const signIn = function (formData) {
  return $.ajax({
    url: config.apiUrl + '/sign-in',
    method: 'POST',
    data: formData
  })
}

const signOut = function () {
  return $.ajax({
    url: config.apiUrl + '/sign-out',
    method: 'DELETE',
    headers: {
      // Add an authorization header that includes the user's token
      // so the API knows who is trying to sign out
      // We added the user to `store` when we signed in, so we could access the token
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const changePassword = function (formData) {
  console.log('formData is ', formData)
  return $.ajax({
    url: config.apiUrl + '/change-password',
    method: 'PATCH',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: formData
  })
}

module.exports = {
  signUp,
  signIn,
  signOut,
  changePassword
}
