var num1 = parseFloat(prompt("Enter the first number"));
var num2 = parseFloat(prompt("Enter the second number"));

if (num1 > num2) {
    console.log("The greater number is: " + num1);
} else if (num2 > num1) {
    console.log("The greater number is: " + num2);
} else {
    console.log('Both numbers are equal.');
}