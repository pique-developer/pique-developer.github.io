firebase.initializeApp({
  apiKey: "AIzaSyDaFNc45hQOqJPoIY8eZQAaWsVftT_lHdU",
  authDomain: "get-pique.firebaseapp.com",
  databaseURL: "https://get-pique.firebaseio.com",
  storageBucket: "get-pique.appspot.com",
  messagingSenderId: "297637710221"
})

$('#p-submit').on('click', (e) => {
  e.preventDefault()
  const formData = {
    firstName: $('#p-login-first_name').val(),
    lastName: $('#p-login-last_name').val(),
    email: $('#p-login-email').val(),
    city: $('#p-login-city').val(),
    state: $('#p-login-state').val(),
    type: $('#p-login-type').val(),
  }
  const ref = firebase.database().ref().push(formData)
})