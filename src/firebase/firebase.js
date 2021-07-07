import firebase from 'firebase/app';
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
const database = firebase.database();


export { firebase, database as default }



// database.ref('expenses')
//   .on('value', (snapshot) => {
//     const expenses = [];
//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       })
//     })
//     console.log(expenses)
//   });

// database.ref().on('value', (snapshot) => {
//   const val = snapshot.val();
//   console.log(`${val.name} is working in ${val.job.company}`)
// })

// database.ref('expenses').on('child_removed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// })
// database.ref('expenses').on('child_changed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// })

// database.ref('expenses').on('child_added', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// })




// database.ref('expenses').push({
//   description: 'First Try',
//   note: 'First Try Note',
//   amount: 999
// })



    // database.ref().on('value', (snapshot) => {
    //   console.log(snapshot.val());
    // })

    // setTimeout(() => {
    //   database.ref('age').set(33)
    // }, 3000);

    // setTimeout(() => {
    //   database.ref().off();
    // }, 6000);

    // setTimeout(() => {
    //   database.ref('age').set(41)
    // }, 8000);

// database.ref('location')
//   .once('value')
//   .then((snapshot) => {
//     const val = snapshot.val()
//     console.log(val)
//   }).catch((e) => {
//     console.log('error', e)
//   });


  // database.ref().set({
  //   name: 'Max Cendalski',
  //   age: 44,
  //   stressLevel: 6,
  //   job: {
  //     title: 'Software developer',
  //     company: 'Google'
  //   },
  //   location: {
  //     city: 'Aliso Viejo',
  //     country: 'United States'
  //   }
  // }).then(() => {
  //   console.log('Data is saved')
  // }).catch((e) => {
  //   console.log('This failed.', e)
  // })

  // database.ref().update({
  //   stressLevel: 9,
  //   'job/company': 'Amazon',
  //   'location/city': 'Seattle'
  // });

// database.ref('isSingle').remove()
//   .then(() => {
//     console.log('Item removed')
//   }).catch((e) => {
//     console.log('something went wrong', e)
//   })



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