  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyCtbomWNmOuQzVHtKdOWeicLvTWZy0eK_U",
    authDomain: "dhttest-dba7d.firebaseapp.com",
    projectId: "dhttest-dba7d",
    storageBucket: "dhttest-dba7d.appspot.com",
    messagingSenderId: "1091127737105",
    appId: "1:1091127737105:web:1ea9c8ce0e6bb1161eeab0",
    measurementId: "G-GF34MD5KTC"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

