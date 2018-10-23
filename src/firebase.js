import * as firebase from 'firebase';

// Initialize Firebase
const config = {
  apiKey: "AIzaSyCG5dL5zqgIa1VhfyjfpQNptdiq1TILc1w",
  authDomain: "diary-79f3b.firebaseapp.com",
  databaseURL: "https://diary-79f3b.firebaseio.com",
  projectId: "diary-79f3b",
  storageBucket: "",
  messagingSenderId: "349344827794"
};
firebase.initializeApp(config);

export const database = firebase.database().ref('/notes');
