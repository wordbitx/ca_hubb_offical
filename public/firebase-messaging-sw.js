importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js');
// // Initialize the Firebase app in the service worker by passing the generated config

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCdvj8g8waul6Fok6YnXI4zAPwTh3UrjaQ",
  authDomain: "ca-wheels.firebaseapp.com",
  databaseURL: "https://ca-wheels-default-rtdb.firebaseio.com",
  projectId: "ca-wheels",
  storageBucket: "ca-wheels.firebasestorage.app",
  messagingSenderId: "420653888644",
  appId: "1:420653888644:web:ccf5ba127482b931133ed1",
  measurementId: "G-PTS3ZTWHF5"
};

// const firebaseConfig = {
//     // apiKey: "AIzaSyCyCyvydYEB8RkvPNsADFnZjhMnlTNNnFw",
//     apiKey: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
//     authDomain: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
//     projectId: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
//     storageBucket: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
//     messagingSenderId: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
//     appId: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
//     measurementId: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
// };

firebase?.initializeApp(firebaseConfig)

// Retrieve firebase messaging
const messaging = firebase.messaging();

self.addEventListener('install', function (event) {
    console.log('Hello world from the Service Worker :call_me_hand:');
});


