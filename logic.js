// Initialize Firebase
var config = {
  apiKey: "AIzaSyBPCp1w9GM4eJULb2QZgU1vekPSBzxqrVY",
  authDomain: "class-work-saturday-171216.firebaseapp.com",
  databaseURL: "https://class-work-saturday-171216.firebaseio.com",
  projectId: "class-work-saturday-171216",
  storageBucket: "class-work-saturday-171216.appspot.com",
  messagingSenderId: "995194489512"
};
firebase.initializeApp(config);

var ref = firebase.database().ref();

var name = "";
var email = "";
var age = 0;
var comment = "";

$("#add-user").on("click", function() {
  event.preventDefault();

  name = $("#name-input").val().trim();
  email = $("#email-input").val().trim();
  age = $("#age-input").val().trim();
  comment = $("#comment-input").val().trim();

  // We need to push these to Firebase
});

// instead of .on("value") with .push() (rather than with .set())
ref.on("child_added", function () {
  // it will invoke the callback and pass in a snapshot of that child

  // Update the html
  $("#name-display").text(snapshot.val().name);
});
