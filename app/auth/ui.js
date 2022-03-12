'use strict'

const store = require('../store')

const signUpSuccess = function (responseData) {
  // update the message on the screen
  $('#auth-display').text('Signed up successfully')

  // remove existing classes and add a green text-success class from bootstrap
  $('#auth-display').removeClass()
  $('#auth-display').addClass('text-success')

  // clear (reset) the forms on the page
  $('form').trigger('reset')

  console.log('signUpSuccess ran. responseData is :', responseData)
}

const signUpFailure = function (error) {
  $('#error-message').text('Error on sign up')

  // remove existing classes and add a red text-danger class from bootstrap
  $('#error-message').removeClass()
  $('#error-message').addClass('text-danger')

  console.error('signUpFailure ran. Error is :', error)
}

const signInSuccess = function (responseData) {
  $('#auth-display').text('Signed in successfully')

  $('#auth-display').removeClass()
  $('#auth-display').addClass('text-success')

  // after signing in, save the `user` from our response's data
  // on the `store` object. So we can access the user's `token` later
  store.user = responseData.user

  // clear (reset) the forms on the page
  $('form').trigger('reset')

  // Hide the "before sign in" elements
  $('#before-sign-in').hide()
  // Display the "after sign in" elements
  $('#after-sign-in').show()
}

const signInFailure = function (error) {
  $('#error-message').text('Error on sign in')

  $('#error-message').removeClass()
  $('#error-message').addClass('text-danger')

  console.error('signInFailure ran. Error is :', error)
}

const signOutSuccess = function () {
  $('#auth-display').text('Signed out successfully')

  $('#auth-display').removeClass()
  $('#auth-display').addClass('text-success')

  $('form').trigger('reset')

  // stop keeping track of the signed in user
  store.user = null

  // clear (reset) the forms on the page
  $('form').trigger('reset')

  // Hide the "after sign in" elements
  $('#after-sign-in').hide()
  // Display the "before sign in" elements
  $('#before-sign-in').show()

  console.log('signOutSuccess ran and nothing was returned!')
}

const signOutFailure = function (error) {
  $('#error-message').text('Error on sign out')

  $('#error-message').removeClass()
  $('#error-message').addClass('text-danger')

  // clear (reset) the forms on the page
  $('form').trigger('reset')

  console.error('signOutFailure ran. Error is :', error)
}

const changePasswordSuccess = function () {
  $('#auth-display').text('Changed password successfully')

  $('#auth-display').removeClass()
  $('#auth-display').addClass('text-success')

  // clear (reset) the forms on the page
  $('form').trigger('reset')

  console.log('changePasswordSuccess ran and nothing was returned!')
}

const changePasswordFailure = function (error) {
  $('#error-message').text('Error on change password')

  $('#error-message').removeClass()
  $('#error-message').addClass('text-danger')

  console.error('changePasswordFailure ran. Error is :', error)
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  changePasswordSuccess,
  changePasswordFailure
}
