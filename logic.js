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
var monthsEmployment = 0;
var monthlyPay = "";

$("#submit").on("click", function() {
  event.preventDefault();

  name = $("#name-input").val().trim();
  email = $("#email-input").val().trim();
  monthsEmployment = parseInt($("#months-input").val().trim());
  monthlyPay = $("#pay-input").val().trim();

  var newRef = ref.push();
  // We need to push these to Firebase
  newRef.set({
    "name": name,
    "email": email,
    "monthsEmployment": monthsEmployment,
    "monthlyPay": monthlyPay,
    "payToDate": monthsEmployment * monthlyPay
  });
});

// instead of .on("value") with .push() (rather than with .set())
ref.on("child_added", function (snapshot) {
  // it will invoke the callback and pass in a snapshot of that child
  let newChild = snapshot.val();
  let nameDisplay = newChild.name;
  let emailDisplay = newChild.email;
  let monthsEmploymentDisplay = newChild.monthsEmployment;
  let monthlyPayDisplay = newChild.monthlyPay;
  let payToDateDisplay = newChild.payToDate;

  // Update the html
  
});
