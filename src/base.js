import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyBShCoHYGc9cz9FkwY9ebBv8rLp5c4boqw',
  authDomain: 'catch-of-the-day-50eb1.firebaseapp.com',
  databaseURL: 'https://catch-of-the-day-50eb1.firebaseio.com',
});

const base = Rebase.createClass(firebaseApp.database());

// This is a named export
export { firebaseApp };

// this is a default export
export default base;
