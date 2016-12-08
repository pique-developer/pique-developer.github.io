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
    .onAuthStateChanged({
      next: user => observer.next(!!user ? assignDefaultProps(user) : false) ,
      error: observer.error
    })
}

export const register = data => {
  firebase.database().ref().child('signups').push(data)
}

export const signUp = (email, password) => {
  return firebase.auth()
    .createUserWithEmailAndPassword(email, password)
}

export const signIn = (email, password) => {
  return firebase.auth()
    .signInWithEmailAndPassword(email, password)
}

export const signOut = _ => {
  return firebase.auth().signOut()
}

export const updateUserProfile = data => {
  return firebase.auth()
    .currentUser
    .updateProfile({...data})
}

function assignDefaultProps(user) {
  const userDefaultProps = {
    displayName: 'Charles Barkley',
    photoURL: 'https://firebasestorage.googleapis.com/v0/b/get-pique.appspot.com/o/test%2F911-av.png?alt=media&token=f97e53b0-90cd-4c01-9a83-1958de6bfd79'
  }
  return {
    ...user,
    photoURL: !!user.photoURL
      ? user.photoURL
      : userDefaultProps.photoURL,
    displayName: !!user.displayName
      ? user.displayName
      : userDefaultProps.displayName,
  }
}

export const fetchApplicants = observer => {
  return firebase
    .database()
    .ref('test')
    .child('applicants')
    .once('value')
    .then(x => x.val())
    .then(convertMapToList)
    .then(createFakeApplicants)
    .then(x => observer.next(x))
    .catch(e => observer.error(e.message))
}

function convertMapToList(data) {
  return Object.keys(data)
    .reduce((acc, x) => acc.concat(data[x]), [])
}

function createFakeApplicants(data) {
  return {
    new: data,
    reviewed: data.slice(2, -1),
    interviewees: data.slice(0, -1),
    finalists: data.slice(3, -1),
  }
}