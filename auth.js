//get data
//db.collection('Bible').get().then(snapshot => {
//    console.log(snapshot.docs)
//});

//listen for auth status changes
auth.onAuthStateChanged(user => {
    if(user) {
        console.log('User Logged in: ', user)
    } else {
        console.log('User Logged out')
    }
});

//signup
const signupForm = document.querySelector('#form-signup');
signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    //get user info
    const email = signupForm['signup_email'].value;
    const password = signupForm['signup_password'].value;

    //sign up user
    auth.createUserWithEmailAndPassword(email, password)
    .then((user) => {
        alert("Welcome! You will be directed to continue your registration!"),
        window.location.href = "register.html";
    })
    .catch((e) => console.log(e.message));   
});

//logout method
const logout = document.querySelector('#signout');
logout.addEventListener('click', (e) => {
    e.preventDefault();
    auth.signOut();
});

//login
const loginForm = document.querySelector('#form-signin');
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    //log in
    const email = loginForm['signin_email'].value;
    const password = loginForm['signin_password'].value;

    auth.signInWithEmailAndPassword(email, password).then(cred => {
        alert("Welcome back! You are now logged in."),
        window.location.href = "studentlist.html";
    })
    .catch((e) => {
        console.log(e.message);
        window.alert("You are not a registered user. Please use the top portion of the form to Sign Up");
        //loginForm.reset();
    });
});