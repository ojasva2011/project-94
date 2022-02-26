// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyANZSoKq8Wvrh0-Zg4Rub2y9TECLoompgY",
    authDomain: "project-chat-app-6bdb9.firebaseapp.com",
    databaseURL: "https://project-chat-app-6bdb9-default-rtdb.firebaseio.com",
    projectId: "project-chat-app-6bdb9",
    storageBucket: "project-chat-app-6bdb9.appspot.com",
    messagingSenderId: "1003030490585",
    appId: "1:1003030490585:web:99ff3ef242eef7527c3dc8"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
});});}