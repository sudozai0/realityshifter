// Firebase Configuration for Reality Shifter
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "your-project-id.firebaseapp.com",
    databaseURL: "https://your-project-id.firebaseio.com",
    projectId: "your-project-id",
    storageBucket: "your-project-id.appspot.com",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Database Reference
const db = firebase.database();

// Authentication Listener
firebase.auth().onAuthStateChanged(user => {
    if (user) {
        console.log("User logged in:", user.email);
    } else {
        console.log("User logged out.");
    }
});