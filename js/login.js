import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js";
import { getDatabase, set, ref, update } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-database.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-auth.js";

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

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = getAuth();

let login = document.getElementById('login')
login.addEventListener('click', (e) => {

  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;

      const dt = new Date();
      update(ref(database, 'users/' + user.uid), {
        last_login: dt,
        email: email
      })
        .then(() => {
          alert('User loged in!');
          //
          sessionStorage.setItem('userId',user.uid)
          window.location = "http://127.0.0.1:5500/site/index.html"
        });
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;

      alert(errorMessage);

    });

});