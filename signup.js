const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBHZSnV9EOZA1YYV1or_NRAsQvBvmqKII0",
  authDomain: "ask-tech-blog-website.firebaseapp.com",
  projectId: "ask-tech-blog-website",
  storageBucket: "ask-tech-blog-website.appspot.com",
  messagingSenderId: "646528519541",
  appId: "1:646528519541:web:7856e6d8f9a0709ffcd73c",
});

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const SignupBtn = document.querySelector("#SignupBtn");

const signUp = (event) => {
  const email = document.querySelector(".Email-input").value;
  const password = document.querySelector(".password").value;
  console.log(email);
  console.log(password);

  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((result) => {
      event.preventDefault();
      console.log(result);
      window.location.href = "login.html";
    })
    .catch((error) => {
      alert(error);
      console.log(error);
    });
};

SignupBtn.addEventListener("click", signUp);
