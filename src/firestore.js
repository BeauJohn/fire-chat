import firebase from 'firebase/app'
import 'firebase/auth'

const firebaseConfig = {
   apiKey: 'AIzaSyBdcK4LlqD1Bm58rbvuWL_wKWJ46wcb9fc',
   authDomain: 'chat-app-a30c8.firebaseapp.com',
   projectId: 'chat-app-a30c8',
   storageBucket: 'chat-app-a30c8.appspot.com',
   databaseURL: 'https://chat-app-a30c8.firebaseio.com',
   messagingSenderId: '171611615583',
   appId: '1:171611615583:web:2e3863b77429eba62b46ea'
}
firebase.initializeApp(firebaseConfig)

const provider = new firebase.auth.GoogleAuthProvider()
const auth = firebase.auth()
auth.setPersistence(firebase.auth.Auth.Persistence.NONE)

export { provider, auth }
