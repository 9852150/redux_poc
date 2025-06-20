var names = "Aditi";
function abc() {
  const names = "Ankit";
  console.log("first", names);
}
abc();
console.log("second", names);
// The var names = "Aditi"; creates a global variable.
// The const names = "Ankit"; inside the function creates a local variable that only exists within the function's scope.
// The console.log inside the function prints the local variable ("Ankit"), while the console.log outside the function prints the global variable ("Aditi")

var names = "Aditi"; // Global variable

function abc() {
  var names = "Ankit"; // Local variable inside function abc (with 'var')
  console.log("first", names);
}
abc(); // Calls the function abc
console.log("second", names);

// Since var is function-scoped, this names variable is local to the function abc().
//  It does not overwrite the global names variable; it simply shadows it within the function's scope.

var names = "Aditi"; // Global variable

function abc() {
  names = "Ankit"; // Reassigns the global variable 'names' to "Ankit"
  console.log("first", names); // Logs the reassigned global variable 'names'
}
abc(); // Calls the function abc
console.log("second", names);
// The global variable names was reassigned inside the function because no var, let, or const was used to create a new local variable.
// As a result, the reassignment affected the global names variable, and both the first and second console.log statements output "Ankit".
