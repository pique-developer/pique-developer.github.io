import firebase from 'firebase'

firebase.initializeApp({
  apiKey: 'AIzaSyBlwBDc0fn1CkYnw966lgS-dT0GunHyXPo',
  authDomain: 'get-pique.firebaseapp.com',
  databaseURL: 'https://get-pique.firebaseio.com',
  storageBucket: 'get-pique.appspot.com',
  messagingSenderId: '297637710221'
})

const DEFAULT_NAME = 'Charles Barkley'
const DEFAULT_PHOTO = 'https://firebasestorage.googleapis.com/v0/b/get-pique.appspot.com/o/test%2F911-av.png?alt=media&token=f97e53b0-90cd-4c01-9a83-1958de6bfd79'

export const initApp = observer => {
  return firebase.auth()
    .onAuthStateChanged({
      next: user => !!user
          ? authStatePopulated(observer, user)
          : observer.next(false),
      error: observer.error
    })
}

function authStatePopulated(observer, user) {
  fetchUser(user).then(x => observer.next(x))
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

function filterProviderData(user) {
  return {...user.providerData[0], uid: user.uid}
}

function fetchUser(user) {
  const userProps = filterProviderData(user)
  const uid = firebase.auth().currentUser.uid || userProps.uid
  return firebase
    .database()
    .ref()
    .child(`users/${uid}`)
    .once('value')
    .then(x => x.val())
    .then(x => !!x ? x : createUser(userProps))
}

function createUser({ displayName, email, photoURL, uid }) {
  displayName = !!displayName ? displayName : DEFAULT_NAME
  photoURL = !!photoURL ? photoURL : DEFAULT_PHOTO
  return firebase
    .database()
    .ref()
    .child(`users/${uid}`)
    .update({ displayName, email, photoURL, uid })
    .then(_ => ({ displayName, email, photoURL, uid }))
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
  return {
    ...user,
    photoURL: !!user.photoURL
      ? user.photoURL
      : DEFAULT_PHOTO,
    displayName: !!user.displayName
      ? user.displayName
      : DEFAULT_NAME,
  }
}

export const fetchData = observer => {
  return firebase
    .database()
    .ref('test')
    .child('applicants')
    .once('value')
    .then(x => x.val())
    .then(convertMapToList)
    .then(createTestData)
    .then(x => observer.next(x))
    .catch(e => observer.error(e.message))
}

function convertMapToList(data) {
  return Object.keys(data)
    .reduce((acc, x) => acc.concat(data[x]), [])
}

function createTestData(data) {
  return {
    applicants: {
      new: data,
      reviewed: data.slice(2, -1),
      interviewees: data.slice(0, -1),
      finalists: data.slice(3, -1),
    },
    scholarships: {
      all: data,
      national: data.slice(2, -1),
      niche: data.slice(0, -1),
      local: data.slice(3, -1),
      based: data.slice(0, 3),
    }
  }
}