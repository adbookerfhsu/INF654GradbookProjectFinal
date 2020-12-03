if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js')
    .then((reg) => console.log('Service worker registered', reg))
    .catch((err) => console.log('Service worker not registerd', err))
  }

    
    //Install Firebase
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    var firebaseConfig = {
        apiKey: "AIzaSyBS2epzYcS3PlS-ftGpP1jiZqjWxQWfUAA",
        authDomain: "gb-signupsignin.firebaseapp.com",
        databaseURL: "https://gb-signupsignin.firebaseio.com",
        projectId: "gb-signupsignin",
        storageBucket: "gb-signupsignin.appspot.com",
        messagingSenderId: "1000282152659",
        appId: "1:1000282152659:web:69ce8b19871768a4cefe26",
        measurementId: "G-Q8EVWMJQLX",
  };

//locating the database with the document
//const bibleGrades = document.querySelector('.')

    // Initialize Firebase
		//  firebase.initializeApp(firebaseConfig);
    //  var auth = firebase.auth();
  
  
    /* 
    $(document).on("submit", "#btnSignUp", function(event) {
      event.preventDefault();
      var promise = auth.createUserWithEmailAndPassword(
        $("#newEmail").val(),
        $("#newPassword").val()
      );
      promise.catch((e) => console.log(e.message));
    });

    $(document).on("submit", "#btnLogin", function(event) {
      event.preventDefault();
      var promise = auth.signInWithEmailAndPassword(
        $("#userEmail").val(),
        $("#userPassword").val()
      );
      promise.catch((e) => {
        console.log(e.message);
                
      });
    });

    $(document).on("click", "#btnLogOut", function(event) {
      event.preventDefault();
      var promise = auth.signOut();
      promise.catch((e) => console.log(e.message));
    });

    firebase.auth().onAuthStateChanged((firebaseUser) => {
      if (firebaseUser) {
        console.log(firebaseUser);
        user = firebaseUser;
        window.location.href = "studentlist.html";
       } else {
        user = null;
        window.alert("You are not Logged in. Please Register or Sign In");
        console.log("not logged in");
      }
    });  
    */    