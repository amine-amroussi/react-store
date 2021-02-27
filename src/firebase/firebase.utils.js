import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAQovqeHxip2A7WIjjEz7nwYriHHKU0C9o",
    authDomain: "react-store-7d637.firebaseapp.com",
    projectId: "react-store-7d637",
    storageBucket: "react-store-7d637.appspot.com",
    messagingSenderId: "689232650840",
    appId: "1:689232650840:web:6412b1a48df49411c8e02d",
    measurementId: "G-KK55PC8J3Q"
  };

  firebase.initializeApp(config);

  export const CreateUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;
  
    const userRef = firestore.doc(`users/${userAuth.uid}`);
  
    const snapShot = await userRef.get();
  
    if (!snapShot.exists) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();
      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        });
      } catch (error) {
        console.log('error creating user', error.message);
      }
    }
  
    return userRef;
  };
  
  export const auth = firebase.auth();
  export const firestore = firebase.firestore();
  
  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const SignInWithGoogle = () => auth.signInWithPopup(provider);
  
  export default firebase;