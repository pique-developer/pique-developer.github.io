import firebase from 'firebase'

firebase.initializeApp({
  apiKey: "AIzaSyDaFNc45hQOqJPoIY8eZQAaWsVftT_lHdU",
  authDomain: "get-pique.firebaseapp.com",
  databaseURL: "https://get-pique.firebaseio.com",
  storageBucket: "get-pique.appspot.com",
  messagingSenderId: "297637710221"
})

export const signUp = data => {
  firebase.database().ref().push(data)
}