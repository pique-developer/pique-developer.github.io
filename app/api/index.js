import firebase from 'firebase'

firebase.initializeApp({
  apiKey: "AIzaSyDaFNc45hQOqJPoIY8eZQAaWsVftT_lHdU",
  authDomain: "get-pique.firebaseapp.com",
  databaseURL: "https://get-pique.firebaseio.com",
  storageBucket: "get-pique.appspot.com",
  messagingSenderId: "297637710221"
})

export const initApp = observer => {
  return firebase.auth()
    .onAuthStateChanged(observer)
}

export const signUp = data => {
  firebase.database().ref().push(data)
}

export const signIn = (email, password) => {
  return firebase.auth()
    .signInWithEmailAndPassword(email, password)
}

export const signOut = _ => {
  return firebase.auth().signOut()
}