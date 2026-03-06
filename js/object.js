// Create an Object:
const car = {
  type: "Fiat",
  model: "500",
  color: "white",
};

// Display Data from the Object:
document.getElementById("demo").innerHTML = "The car type is " + car.type;

//properties

const person = {
  firstname: "John",
  lastname: "Doe",
  age: 50,
};

document.getElementById("demo1").innerHTML =
  person.firstname + " is " + person.age;

//CREAting object

const obj = {
  id: "124",
  name: "Mihir jadav",
  city: "songadh",
};

//access
console.log(obj.name, obj["name"]);
//add
obj.percentage = 88.2;
//update
obj.city = "surat";
//delete
delete obj.city;

console.log(obj);

let data = [
  { id: 101, name: "mihir" },
  { id: 102, name: "prem" },
  { id: 103, name: "jay" },
];

data.map((v) => {
  console.log(v.id, v.name);
});

const person1 = {
  name: "mihir",
  age: "22",
};

for (let k in person1) {
  console.log(k, person1[k]);
}

const person2 = [
  {
    name: "Amit",
    age: 25,
  },
  {
    name: "Piyush",
    age: 40,
  },
];

// person2.map((v) => {
//   console.log(v.id, v.name);
// });

for (let k in person2) {
  console.log(k, person2[k]);
}

const student = [
  {
    name: "Amit",
    age: 25,
    course: ["c", "html"],
  },
];

student.map((v) => {
  console.log(v.name, v.age);
  v.course.map((v1) => {
    console.log(v1);
  });
});

const myObj = {
  name: "jd",
  age: 20,
  cars: {
    car1: "ford",
    car2: "breza",
    car3: "BMW",
  },
};

// console.log(
//   myObj.name,
//   myObj.age,
//   myObj.cars.car1,
//   myObj.cars.car2,
//   myObj.cars.car3,
// );

for (let k in myObj) {
  if (k === "cars") {
    for (let k1 in myObj.cars) {
      console.log(myObj[k][k1]);
    }
  } else {
    console.log(myObj[k]);
  }
}

const person5 = [
  {
    name: "amit",
    age: 19,
    course: {
      c1: "c",
      c2: "html",
    },
  },
  {
    name: "mayur",
    age: 20,
    course: {
      c1: "c",
      c2: "html",
    },
  },
];

person5.map((v) => {
  console.log(v.name, v.age);

  for (let k in v.course) {
    console.log(k, v.course[k]);
  }
});

let institues = [
  {
    name: "ABC IT Institute",
    seat: [
      {
        react: 15,
        node: 20,
        full_stack: 10,
        ui_ux: 0,
      },
    ],
  },
  {
    name: "XYZ IT Institute",
    seat: [
      {
        react: 0,
        node: 70,
        full_stack: 0,
        ui_ux: 10,
      },
    ],
  },
  {
    name: "PQR IT Institute",
    seat: [
      {
        react: 7,
        node: 0,
        full_stack: 0,
        ui_ux: 0,
      },
    ],
  },
  {
    name: "MNP IT Institute",
    seat: [
      {
        react: 0,
        node: 0,
        full_stack: 0,
        ui_ux: 0,
      },
    ],
  },
];

institues.map((v) => {
  console.log(v.name);
  v.seat.map((v1) => {
    for (let k in v1) {
      console.log(k, v1[k]);
    }
  });
});

let data1 = {
  personal_info: {
    name: "amit",
    age: 25,
    city: "surat",
  },
  courses: ["C", "JavaScript", "React"],
  branches: {
    b1: {
      admission: 50,
      vacant_seat: 10,
    },
    b2: {
      admission: 30,
      vacant_seat: 20,
    },
    b3: {
      admission: 25,
      vacant_seat: 25,
    },
    b4: {
      admission: 40,
      vacant_seat: 10,
    },
  },
};

for (let k in data1){
  // console.log(k,data[k])
 
  if (k=== "personal_info"){
    for (let k1 in data1.personal_info){
      console.log(data1[k][k1])
    }else if(k === "courses"){
    courses.map((v1) => {
      console.log(v1)
    })
    }
  }



 
  // for (let k in  personal_info){
  //   console.log(k,personal_info[k])
  // }
  // courses.map((v1) => {
  //   console.log(v1.courses)
  // })
}
