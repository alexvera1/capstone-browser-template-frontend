'use strict'

const onCreateSuccess = function (responseData) {
  $('#applications-display').text('Application successfully created')

  $('#applications-display').removeClass()
  $('#applications-display').addClass('text-success')

  // extract the move from the response's data
  // update the div with the id `applications-display` to have html for our movie
  const application = responseData.application
  $('#applications-display').html(`
    <div>
      <h3>${application.name}</h3>
      <p>Company: ${application.company}</p>
      <p>Role:${application.role}</p>
      <p>Salary:${application.salary}</p>
      <p>Status:${application.status}</p>
    </div>
  `)

  $('form').trigger('reset')
  console.log('onCreateSuccess ran. responseData is :', responseData)
}

const onCreateFailure = function (error) {
  $('#error-message').text('Error on creating application')
  $('#error-message').removeClass()
  $('#error-message').addClass('text-danger')
  console.error('onCreateFailure ran. Error is :', error)
}

const onIndexSuccess = function (responseData) {
  $('#applications-display').text('All Applications successfully received')
  $('#applications-display').removeClass()
  console.log('onIndexSuccess ran. responseData is :', responseData.applications)

  let applicationsHtml = ''
  const applications = responseData.applications
  applications.forEach(application => {
    applicationsHtml += `
    <div>
    <h3>${application.name}</h3>
    <p>Company: ${application.company}</p>
    <p>Role:${application.role}</p>
    <p>Salary:${application.salary}</p>
    <p>Status:${application.status}</p>
    <p>ID: ${application._id}</p>
    <!-- Add the players's id to the delete button. We can access
             it with jQuery's .data() method later in events.js -->
        <button class="applications-destroy-dynamic" data-id=${applications._id} data-company="${applications.name}">Destroy Application</button>
      </div>
    </div>
  `
  })
  $('#applications-display').html(applicationsHtml)
}

const onIndexFailure = function (error) {
  $('#error-message').text('Error on getting movies')
  $('#error-message').removeClass()
  $('#error-message').addClass('text-danger')
  console.error('onIndexFailure ran. Error is :', error)
}

const onShowSuccess = function (responseData) {
  $('#applications-display').text('One Application successfully received')
  $('#applications-display').removeClass()
  $('#applications-display').addClass('text-success')
  console.log('onShowSuccess ran. responseData is :', responseData)
  $('form').trigger('reset')

  const application = responseData.application
  $('#applications-display').html(`
    <div>
    <h3>${application.name}</h3>
    <p>Company: ${application.company}</p>
    <p>Role:${application.role}</p>
    <p>Salary:${application.salary}</p>
    <p>Status:${application.status}</p>
    <p>ID: ${application._id}</p>
    </div>
  `)
}

const onShowFailure = function (error) {
  $('#error-message').text('Error on getting movie')
  $('#error-message').removeClass()
  $('#error-message').addClass('text-danger')
  console.error('onShowFailure ran. Error is :', error)
}

const onDestroySuccess = function () {
  $('#applications-display').text('Application successfully deleted')
  $('#applications-display').removeClass()
  $('#applications-display').addClass('text-success')
  $('form').trigger('reset')
  console.log('application successfully deleted')
}

const onDestroyFailure = function (error) {
  $('#error-message').text('Error on deleting movie')
  $('#error-message').removeClass()
  $('#error-message').addClass('text-danger')
  console.error('onDestroyFailure ran. Error is :', error)
}

const onUpdateSuccess = function () {
  $('#applications-display').text('Application successfully updated')
  $('#applications-display').removeClass()
  $('#applications-display').addClass('text-success')
  $('form').trigger('reset')
  console.log('Application successfully updated')
}

const onUpdateFailure = function (error) {
  $('#error-message').text('Error on updating movie')
  $('#error-message').removeClass()
  $('#error-message').addClass('text-danger')
  console.error('onUpdateFailure ran. Error is :', error)
}

module.exports = {
  onCreateSuccess,
  onCreateFailure,
  onIndexSuccess,
  onIndexFailure,
  onShowSuccess,
  onShowFailure,
  onDestroySuccess,
  onDestroyFailure,
  onUpdateSuccess,
  onUpdateFailure
}
