

const obj ={
 
    id:"123",
    name:"mihir",
    city:"songadh"
}

const obj2 ={
    state:"gujarat",
    salary:"45000"
}

let ans = [...obj,...obj2]

const no1=[1,2,3];
const no2=[4,5,6];

const comb = [...no1,...no2]
console.log(comb)



console.log("print")

// console.log(obj.name,obj.city)

const {id="1",name="mj"} = obj;

