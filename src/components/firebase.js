import firebase from 'firebase';

var firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyBGe6DRbv4i1HQpCCZzzmgzccuUy3EYu2c',
  authDomain: 'save-date-e6bdf.firebaseapp.com',
  projectId: 'save-date-e6bdf',
  storageBucket: 'save-date-e6bdf.appspot.com',
  messagingSenderId: '910673911272',
  appId: '1:910673911272:web:f3755d09ea3c6b102fd85d',
});
var db = firebaseApp.firestore();
export { db };
