'use strict'

const getFormFields = require('../../lib/get-form-fields')

const api = require('./api')
const ui = require('./ui')

const onCreateApplication = function (event) {
  event.preventDefault()
  console.log('onCreateApplication ran!')

  const form = event.target
  const formData = getFormFields(form)

  api.create(formData)
    .then(ui.onCreateSuccess)
    .catch(ui.onCreateFailure)
}

const onIndexApplication = function (event) {
  event.preventDefault()
  console.log('onIndexApplication ran!')

  api.index()
    .then(ui.onIndexSuccess)
    .catch(ui.onIndexFailure)
}

const onShowApplication = function (event) {
  event.preventDefault()
  console.log('onShowApplication ran!')

  const form = event.target
  const formData = getFormFields(form)
  const id = formData.application.id

  api.show(id)
    .then(ui.onShowSuccess)
    .catch(ui.onShowFailure)
}

const onDeleteApplication = function (event) {
  event.preventDefault()
  console.log('onDeleteApplication ran!')

  const form = event.target
  const formData = getFormFields(form)
  const id = formData.application.id

  api.destroy(id)
    .then(ui.onDeleteSuccess)
    .catch(ui.onDeleteFailure)
}

const onUpdateApplication = function (event) {
  event.preventDefault()
  console.log('onUpdateApplication ran!')

  const form = event.target
  const formData = getFormFields(form)
  const id = formData.application.id

  api.update(id, formData)
    .then(ui.onUpdateSuccess)
    .catch(ui.onUpdateFailure)
}

const addHandlers = () => {
  $('#applications-create').on('submit', onCreateApplication)
  $('#applications-index').on('submit', onIndexApplication)
  $('#applications-show').on('submit', onShowApplication)
  $('#applications-delete').on('submit', onDeleteApplication)
  $('#applications-update').on('submit', onUpdateApplication)
}

module.exports = {
  addHandlers
}
