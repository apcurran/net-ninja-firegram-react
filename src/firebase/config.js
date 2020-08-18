  import * as firebase from "firebase/app";
  import "firebase/storage";
  import "firebase/firestore";
  
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBtaDDhBD2BNe5zg2SfSrUEMxf8L4pu99A",
    authDomain: "firegram-ec7e3.firebaseapp.com",
    databaseURL: "https://firegram-ec7e3.firebaseio.com",
    projectId: "firegram-ec7e3",
    storageBucket: "firegram-ec7e3.appspot.com",
    messagingSenderId: "795536117238",
    appId: "1:795536117238:web:6702a7cf0b36abc4638bd7"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();

  export { projectStorage, projectFirestore };