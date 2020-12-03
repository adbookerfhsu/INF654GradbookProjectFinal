$(document).on("submit", "#form-signup", function(event) {
    event.preventDefault();
    var promise = auth.createUserWithEmailAndPassword(
      $("#").val(),
      $("#signup_password").val()
    );
    promise.catch((e) => console.log(e.message));
  });

  $(document).on("submit", "#form-signin", function(event) {
    event.preventDefault();
    var promise = auth.signInWithEmailAndPassword(
      $("#signin_email").val(),
      $("#signin_password").val()
    );
    promise.catch((e) => {
      console.log(e.message);
      $("#alert-signin").text(e.message);
      $("#alert-signin").show();
    });
  });

  $(document).on("click", "#signout", function(event) {
    event.preventDefault();
    var promise = auth.signOut();
    promise.catch((e) => console.log(e.message));
  });

  auth.onAuthStateChanged((firebaseUser) => {
    if (firebaseUser) {
      console.log(firebaseUser);
      user = firebaseUser;
      window.location.href = "private.html";
     } else {
      user = null;
      window.alert("You are not the droids we are looking for! Please Register or Sign In");
      console.log("not logged in");
    }
  });