import firebase from 'firebase';
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCOrLNyTNkilAaaOhSYC_ABReYI8zmxe9U",
  authDomain: "budgetapp-bad18.firebaseapp.com",
  databaseURL: "https://budgetapp-bad18-default-rtdb.firebaseio.com",
  projectId: "budgetapp-bad18",
  storageBucket: "budgetapp-bad18.appspot.com",
  messagingSenderId: "690958198971",
  appId: "1:690958198971:web:5002adf581968436bf619e",
  measurementId: "G-51N2FFX9X9"
};

firebase.initializeApp(firebaseConfig);


firebase.database().ref().set({
  name: 'Max'
})

/* < !--The core Firebase JS SDK is always required and must be listed first-- >
<script src="https://www.gstatic.com/firebasejs/8.6.5/firebase-app.js"></script>

<!--TODO: Add SDKs for Firebase products that you want to use
https://firebase.google.com/docs/web/setup#available-libraries -->
<script src="https://www.gstatic.com/firebasejs/8.6.5/firebase-analytics.js"></script>

<script>
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyCOrLNyTNkilAaaOhSYC_ABReYI8zmxe9U",
  authDomain: "budgetapp-bad18.firebaseapp.com",
  databaseURL: "https://budgetapp-bad18-default-rtdb.firebaseio.com",
  projectId: "budgetapp-bad18",
  storageBucket: "budgetapp-bad18.appspot.com",
  messagingSenderId: "690958198971",
  appId: "1:690958198971:web:5002adf581968436bf619e",
  measurementId: "G-51N2FFX9X9"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
</script> */