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
const SignupBtn = document.querySelector("#LoginBtn");

const signIn = (event) => {
  const email = document.querySelector(".Email-input").value;
  const password = document.querySelector(".password").value;
  console.log(email);
  console.log(password);

  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((result) => {
      window.location.href = "index.html";
    })
    .catch((error) => {
      console.log(error.message);
    });
};

SignupBtn.addEventListener("click", signIn);
