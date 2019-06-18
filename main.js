var result = "";
var number = 19;

if (number % 3 === 0) {
    result = result + "Pling";
}
if (number % 5 === 0) {
    result += "Plang"
}
if (number % 7 === 0) {
    result += "Plong"
}

console.log(result || number);