firebase.initializeApp({
  apiKey: "AIzaSyDaFNc45hQOqJPoIY8eZQAaWsVftT_lHdU",
  authDomain: "get-pique.firebaseapp.com",
  databaseURL: "https://get-pique.firebaseio.com",
  storageBucket: "get-pique.appspot.com",
  messagingSenderId: "297637710221"
})

const signUp = {
  selectedIndex: 0,
  init() {
    signUp.renderInputField(signUp.selectedIndex)
    signUp.onSelectChange()
    signUp.onSubmit()
  },
  onSelectChange() {
    $('#p-login-type').on('change', function(e) {
      const $selectedIndex = $(this).context.options.selectedIndex
      if ($selectedIndex !== signUp.selectedIndex) {
        $('.login-dependent input').val('')
        signUp.selectedIndex = $selectedIndex
        signUp.renderInputField(signUp.selectedIndex)
      }
    })
  },
  renderInputField(index) {
    $('#login-school').css('display', 'none')
    $('#login-nonprofit').css('display', 'none')
    $('#login-employer').css('display', 'none')
    switch (index) {
      case 1:
      case 2:
      case 3:
      case 4:
        $('#login-school').css('display', 'block')
        break
      case 5:
        $('#login-nonprofit').css('display', 'block')
        break
      case 6:
        $('#login-employer').css('display', 'block')
        break
      default:
        $('#login-school').css('display', 'block')
        break
    }
  },
  onSubmit() {
    $('#p-submit').on('click', (e) => {
      e.preventDefault()
      const formData = {
        firstName: $('#p-login-first_name').val(),
        lastName: $('#p-login-last_name').val(),
        email: $('#p-login-email').val(),
        city: $('#p-login-city').val(),
        state: $('#p-login-state').val(),
        school: $('#p-login-school').val(),
        nonprofit: $('#p-login-nonprofit').val(),
        employer: $('#p-login-employer').val(),
        type: $('#p-login-type').val(),
      }

      if (
        !!formData.firstName
        && !!formData.lastName
        && !!formData.email
        && !!formData.city
        && !!formData.state
        && !!formData.type
        && !!formData.school
        || !!formData.nonprofit
        || !!formData.employer
      ) {
        firebase.database().ref().push(formData)
      } else {
        $('.p-notify').text('All fields are required')
      }
    })
  }
}

signUp.init()