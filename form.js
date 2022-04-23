// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later,
// measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCeH6Ai_BbJyPVvg2_q8guV8U5f7kNWXOw",
  authDomain: "fir-auth-859f2.firebaseapp.com",
  projectId: "fir-auth-859f2",
  storageBucket: "fir-auth-859f2.appspot.com",
  messagingSenderId: "832043890635",
  appId: "1:832043890635:web:ae5ad59effd777b2dca84e"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
  
const auth = firebase.auth();
  
// Signup function
function signUp() {
  var email = document.getElementById("email");
  var password = document.getElementById("password");
  
  const promise = auth.createUserWithEmailAndPassword(
    email.value,
    password.value
  );
  promise
    .then(() => alert("SignUp Successfully"))
    .catch((e) => alert(e.message));
}
  
// SignIN function
function signIn() {
  var email = document.getElementById("email");
  var password = document.getElementById("password");
  const promise = auth.signInWithEmailAndPassword(
            email.value, password.value);
  promise.catch((e) => alert(e.message));
}
  
// SignOut
function signOut() {
  auth.signOut();
  alert("SignOut Successfully from System");
}
  
// Active user to homepage
firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    var email = user.email;
    alert("Active user " + email);
  } else {
    alert("No Active user Found");
  }
});

