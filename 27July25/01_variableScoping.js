// Variable Scoping

// Scope: basically wo jagah hoti hai jahan tak koi variable zinda hota hai aur accessible hota hai.

// Global Scope: yeh woh scope hai jo hum variable ko kahin par bhi access kar sakte hain sirf variable k declaration se pehle usko access nahi kar sakte hain

var firstName = "Hashim";
let middleName = "Ahmad";
const lastName = "Malik";

// Ab hum in teenon variables ko kahin bhi access kar sakte hain, sirf inko in variables se upar nahi access kar sakte

{
  console.log(firstName);
  console.log(middleName);
  console.log(lastName);
}

function checkAccess() {
  console.log(firstName);
  console.log(middleName);
  console.log(lastName);
}
// checkAccess();

if (true) {
  //   console.log(firstName);
  //   console.log(middleName);
  //   console.log(lastName);
}

for (let i = 0; i < 5; i++) {
  //   console.log(firstName);
  //   console.log(middleName);
  //   console.log(lastName);
}

// function/local scope: function scope ko hum local scope bhi kehte hain aur var jo hai woh function/local scope hai kyun ki var function k scope yani "{}" k bahir access nahi hosakta hai

function varAccess() {
  var fullName = "Hashim Malik";
  console.log(fullName); // Hashim Malik
}
// varAccess();
// console.log(fullName); // ReferenceError: fullName is not defined (kyun k var function k scope k bahir access nahi hosakta)

if (true) {
  var isMarried = false;
  console.log(isMarried); // yahan var is scope ki respect nahi kar raha hai, yani is k bahir bhi accessible nahi
}

for (let i = 0; i < 5; i++) {
  console.log(isMarried); // // yahan var is scope ki respect nahi kar raha hai, yani is k bahir bhi accessible nahi
}
// Note: Is k ilawa var har scope k bahir access hota hai

// Block Scope:
{
  let myAge = 24;
  const isStudent = true;

  console.log(myAge);
  console.log(isStudent);
}

// console.log(myAge); // RefereneError: myAge is not defined
// console.log(isStudent); // RefereneError: myAge is not defined

if (true) {
  console.log(myAge); // RefereneError: myAge is not defined
  console.log(isStudent); // RefereneError: myAge is not defined
}

for (let i = 0; i < 5; i++) {
  console.log(myAge); // RefereneError: myAge is not defined
  console.log(isStudent); // RefereneError: myAge is not defined
}

function checkLetAndConst() {
  console.log(myAge); // RefereneError: myAge is not defined
  console.log(isStudent); // RefereneError: myAge is not defined
}
checkLetAndConst();

// Note: kyun ki let & const dono curly barace "{}" k bahir access nahi hosakte hain
