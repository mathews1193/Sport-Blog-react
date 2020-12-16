import firebase from 'firebase';

// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyCxyire8mApsYp9Ep4JRHxpP4ODtaosqGg",
    authDomain: "sport-blog-e1971.firebaseapp.com",
    projectId: "sport-blog-e1971",
    storageBucket: "sport-blog-e1971.appspot.com",
    messagingSenderId: "805988190410",
    appId: "1:805988190410:web:1ae65811e5dc4e4dfd4c33",
    measurementId: "G-WYC9G6KNQK"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;