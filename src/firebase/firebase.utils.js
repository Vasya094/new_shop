import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
  apiKey: "AIzaSyBBarPRKCmwFwBL1H3-FwqK-j-Z4bOjUrU",
  authDomain: "course2-db.firebaseapp.com",
  projectId: "course2-db",
  storageBucket: "course2-db.appspot.com",
  messagingSenderId: "114231955966",
  appId: "1:114231955966:web:6656c6872e6569744bb0af",
  measurementId: "G-964PGKEZK0"
};

export const createUserProfileDocument = async ( userAuth, additionalData ) => {
  if ( !userAuth ) return;
  const userRef = firestore.doc( `users/${userAuth.uid}` )
  const snapShot = await userRef.get()
  if ( !snapShot.exists )
  {
    const { displayName, email } = userAuth
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch ( err )
    {
      console.log('error creating user ', err.message)
    }
  }
  return userRef
}

export default !firebase.apps.length ? firebase.initializeApp(config) : firebase.app();

// if (firebase.apps.length === 0) {
//   firebase.initializeApp({});
// }

// firebase.initializeApp( config )

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()

provider.setCustomParameters( { prompt: 'select_account' } )

export const signInWithGoogle = () => auth.signInWithPopup( provider )

// export default firebase;