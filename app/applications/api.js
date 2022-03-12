'use strict'

const config = require('../config')
const store = require('../store')

const create = function (formData) {
  console.log('formData: ', formData)
  return $.ajax({
    url: config.apiUrl + '/applications',
    method: 'POST',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: formData
  })
}

const index = function () {
  return $.ajax({
    url: config.apiUrl + '/applications',
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const show = function (id) {
  return $.ajax({
    url: config.apiUrl + '/applications/' + id,
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const destroy = function (id) {
  return $.ajax({
    url: config.apiUrl + '/applications/' + id,
    method: 'DELETE',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const update = function (id, formData) {
  return $.ajax({
    url: config.apiUrl + '/applications/' + id,
    method: 'PATCH',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: formData
  })
}

module.exports = {
  create,
  index,
  show,
  destroy,
  update
}
