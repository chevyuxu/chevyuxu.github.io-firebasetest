const auth = firebase.auth();

const email = document.getElementById("email");
const password = document.getElementById("password");
const btnSignIn = document.getElementById("btnSignIn");
const btnSignUp = document.getElementById("btnSignUp");
const btnSignOut = document.getElementById("btnSignOut");
const signInfo = document.getElementById("sign-info");

// 登入
document.getElementById('btnSignIn').addEventListener('click', function (e) {
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;

  auth.signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
                    // Handle successful login
                    console.log('User logged in:', userCredential.user);
                })
                .catch((error) => {
                    // Handle login error
                    console.error('Login error:', error.message);
                    document.getElementById('signInfo').innerHTML = error.message;
                });
});

// 註冊
document.getElementById('btnSignUp').addEventListener('click', function (e) {
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;

  auth.createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
                    // Handle successful login
                    console.log('User logged in:', userCredential.user);
                })
                .catch((error) => {
                    // Handle login error
                    console.error('Login error:', error.message);
                    document.getElementById('signInfo').innerHTML = error.message;
                });
});

auth.onAuthStateChanged(function (user) {
  if (user) {
    document.getElementById('signInfo').innerHTML = user.email + " is logged in";
    console.log(user.uid);
  } else {
    console.log("not logged in");
  }
});

document.getElementById('btnSignOut').addEventListener('click', function () {
  auth.signOut();
  document.getElementById('email').value = "";
  document.getElementById('password').value = "";
  document.getElementById('signInfo').innerHTML = "No one login...";
});
