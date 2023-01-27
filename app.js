let resultInput = parseInt(prompt("Enter you exam results"));
let resultOutput = document.getElementById("resultOutput");

/*========== input exam result and output GPA conditions ==========*/
if (resultInput <= 100 && resultInput >= 80) {
   resultOutput.innerHTML = "You Result is: A+";
} else if (resultInput <= 79 && resultInput >= 70) {
   resultOutput.innerHTML = "You Result is: A";
} else if (resultInput <= 69 && resultInput >= 60) {
   resultOutput.innerHTML = "You Result is: A-";
} else if (resultInput <= 59 && resultInput >= 50) {
   resultOutput.innerHTML = "You Result is: B";
} else if (resultInput <= 49 && resultInput >= 40) {
   resultOutput.innerHTML = "You Result is: C";
} else if (resultInput <= 39 && resultInput >= 33) {
   resultOutput.innerHTML = "You Result is: D";
} else if (resultInput <= 32 && resultInput >= 1) {
   resultOutput.innerHTML = "You Result is: F";
} else {
   resultOutput.innerHTML = "Your result is not found! Please try again...";
}