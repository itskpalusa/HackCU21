import app from 'firebase/app';
import 'firebase/auth';

export const config = {
  apiKey: "AIzaSyA-sfwXQoIw4jZ_4NJlPolrXW8xV2_WxgY",
  authDomain: "hackcu21.firebaseapp.com",
  databaseURL: "https://hackcu21-default-rtdb.firebaseio.com",
  projectId: "hackcu21",
  storageBucket: "hackcu21.appspot.com",
  messagingSenderId: "523512605214",
  appId: "1:523512605214:web:a1f6c37227f10250481c0f",
  measurementId: "G-TPCTZG01K4"
};

class Firebase {
  constructor() {
    app.initializeApp(config);

    this.auth = app.auth();
  }

    // *** Auth API ***

  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

      doSignOut = () => this.auth.signOut();

        doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

  doPasswordUpdate = password =>
    this.auth.currentUser.updatePassword(password);
}

export default Firebase;


