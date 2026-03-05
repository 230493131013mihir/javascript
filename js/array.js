let arr = [2,4,6,8];
let arr2 = [24,48];

console.log(arr[3], arr.length );


for (let i=0; i<arr.length; i++){
    console.log(arr[i]);
}

function demo(a,b){
    console.log(a,b)
}

demo(12,14);


const demo1 = (a,b) => {
    console.log(a,b);
}

demo1(16,18);

arr.forEach((v,i) => console.log(v,i));

const r = arr.map((v, i) => {
    console.log(v, i);
})
console.log(r);

arr.map((v,i) => console.log(v,i))  

const r1 = arr.filter((v,i) => v>5 && v<9);
console.log(r1);

const r2 = arr.reduce((acc,v,i) => acc+v ,0);
console.log(r2);

const r3 = arr.indexOf(8);
console.log(r3);

const r4 = arr.findIndex((v,i) => v>6);
console.log(r4);

const r5 = arr.find((v,i) => v>4);
console.log(r5);

const r6 = arr.includes(8);
console.log(r6);

const r7 = arr.concat(arr2);
console.log(r7);

const r8 = arr.toString();
console.log(r8);

const r9 = Array.isArray(arr);
console.log(r9);

arr.push(38);
arr.unshift(48);//add first
arr.splice(2,0,40);

arr.pop();                             //remove last
arr.shift();                             //remove first
arr.splice(2,1);


arr[1] = 80;
console.log(arr);
