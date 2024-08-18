    // Import the functions you need from the SDKs you need
    import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js";
    import { getDatabase, set, ref, update } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-database.js";
    import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged  } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-auth.js";

    // TODO: Add SDKs for Firebase products that you want to use
    // https://firebase.google.com/docs/web/setup#available-libraries
  
    // Your web app's Firebase configuration
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    const firebaseConfig = {
      apiKey: "AIzaSyAUoAcUSnOxUJK_RvQZpXIEUimyGOULg9o",
      authDomain: "nps-jsi09-9b9fe.firebaseapp.com",
      databaseURL: "https://nps-jsi09-9b9fe-default-rtdb.asia-southeast1.firebasedatabase.app",
      projectId: "nps-jsi09-9b9fe",
      storageBucket: "nps-jsi09-9b9fe.appspot.com",
      messagingSenderId: "341512619162",
      appId: "1:341512619162:web:ed8645d7eff740116b4b23",
      measurementId: "G-3K8YDGFWPD"
    };
  
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const database = getDatabase(app);
    const auth = getAuth();

    //     let signUp = document.getElementById('signUp');
    //     signUp.addEventListener('click',(e) => {

    //       var email = document.getElementById('email').value;
    //       var password = document.getElementById('password').value;


    //       createUserWithEmailAndPassword(auth, email, password)
    // .then((userCredential) => {
    //   // Signed in 
    //   const user = userCredential.user;

    //   set(ref(database, 'users/' + user.uid),{
    //     email:email,
    //   })
    //   alert('User created!');
    //   // ...
    // })
    // .catch((error) => {
    //   const errorCode = error.code;
    //   const errorMessage = error.message;

    //   alert(errorMessage);
    //   // ..
    // });
    // });

// let login = document.getElementById('login')
// login.addEventListener('click', (e) => {

//     var email = document.getElementById('email').value;
//     var password = document.getElementById('password').value;

//     signInWithEmailAndPassword(auth, email, password)
//     .then((userCredential) => {
//       // Signed in 
//       const user = userCredential.user;
      
//       const dt = new Date();
//       update(ref(database, 'users/' + user.uid),{
//         last_login : dt,
//       })
//       alert('User loged in!');
//       // ...
//     })
//     .catch((error) => {
//       const errorCode = error.code;
//       const errorMessage = error.message;

//       alert(errorMessage);

//     });
   
// });

const user = auth.currentUser;
onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/auth.user
      const uid = user.uid;
      // ...
    } else {
      // User is signed out
      // ...
    }
  });
