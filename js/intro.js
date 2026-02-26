// output function
// console.log("hello world");
// document.writeln("<h2>learn js</h2>");
// document.getElementById("demo2").innerHTML = "demo data";
//  alert("hello");

// // input function
// let age = parseInt(prompt("enter your age:"));
// console.log(age + 3);
// document.getElementById("demo1").innerHTML = age + 3;

// keywords

//var
//we declare same var name
// var x = 10;
// var x = 20;

// console.log(x);

// //var does not have any block
// {
//   var x = 10;
// }

// console.log(x); //10

// //we cannot re-declare same var name
// //let
// let x = 10;
// let x = 20;
// console.log(x); //error;

// //let have a block same name not allowed
// {
//     let x=10;
// }
// console.log(x); //error

// {
//     let x=10;
//     console.log(x); //done
// }

//constant
//we cannot change const value
// const x = 10;
// x = x + 5;
// console.log(x); //error

//declare and initialize at same time

// const x;
// x = 10;
// console.log(x);

//const have a block

// {
//   const x = 10;
// }
// console.log(x); //error

// function demo() {
//   var x = 10; //function scope: var,let,const
// }
// console.log(x);

// even or odd//
// alert("enter the number");
// let num= parseInt(prompt("enter your number:"));
// if(num%2==0){
//     console.log("num is even")
// }else{
//     console.log("num is odd")
// }
// //voting
// alert("enter the age");
// let age= parseInt(prompt("enter your age:"));
// if(age>=18){
//     console.log("eligible")
// }else{
//     console.log("not eligible")
// }

//result
// alert("enter the percentage")
// let per=parseFloat(prompt("enter your percentage"));

// if(per>91 && per<=100){
// console.log("grade A");

// }else if(per>80 && per<90){
//     console.log("grade B");

// }else if(per>70 && per<80){
//     console.log("grade C");

// }else if(per>60 && per<70){
//     console.log("grade d");
// }
// else if(per>50 && per<60){
//     console.log("grade e");

// }else if(per>0 && per<40){
//     console.log("failed")
// }else{
//     console.log("invalid percentage");
// }

////salary

let gender=(prompt("enter your gender: m/f"))
let salary=parseInt(prompt("enter the salary"));
let bonus=0;
if(salary<10000){
    if(gender == 'm'){
        bonus=salary*0.02;
    }
    else if(gender == 'f'){
        bonus=salary*0.03;
}
console.log("your bonus",bonus);
}else{
    console.log("you are no eligible for bonus")
}




