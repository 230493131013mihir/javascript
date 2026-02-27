
const cars1 = ["BMW", "Volvo", "Saab", "Ford"];
let text1 = "";
for (let i = 0; i < cars1.length; i++) {
  text1 += cars1[i] + "<br>";
}
document.getElementById("demo1").innerHTML = text1;

let text2 = "";
let i2 = 0;
while (i2 < 10) {
  text2 += "The number is " + i2 + "<br>";
  i2++;
}
document.getElementById("demo2").innerHTML = text2;

let text3 = "";
let i3 = 0;
do {
  text3 += "The number is " + i3 + "<br>";
  i3++;
} while (i3 < 10);

document.getElementById("demo3").innerHTML = text3;

let text4 = "";
for (let i = 0; i < 10; i++) {
  if (i === 3) {
    break;
  }
  text4 += "The number is " + i + "<br>";
}
document.getElementById("demo4").innerHTML = text4;

const person = { fname: "John", lname: "Doe", age: 25 };
let text5 = "";
for (let x in person) {
  text5 += person[x] + " ";
}
document.getElementById("demo5").innerHTML = text5;

const cars2 = ["BMW", "Volvo", "Mini"];
let text6 = "";
for (let x of cars2) {
  text6 += x + "<br>";
}
document.getElementById("demo6").innerHTML = text6;
