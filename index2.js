let obj = {
  name: "abc",
  age: 12,

  getData() {
    return this.name;
  },
  getName: function () {
    return this.name;
  },
};

obj.firstName = "xyz";

console.log(Object.hasOwn(obj, "name1"));

console.log(Object.getOwnPropertyNames(obj));

//error
//console.log(obj.hasOwn("name"));
Object.keys(obj).forEach((key) => {
  console.log(key);
});

Object.values(obj).forEach((key) => {
  console.log(key);
});

[1, 2, 3, 3, 3].forEach((elem) => {
  console.log(elem);
});

[1, 2, 3, 3, 3].forEach((elem) => console.log(elem));

let name = "test name";

let paragraph =
  "A crash test dummy, or simply dummy, is a full-scale" +
  "anthropomorphic test device that simulates the dimensions, *** " +
  name +
  " *** weight proportions and articulation of the human " +
  "body during a traffic collision";

//string literal || Template strings

let paragraph1 = `A crash test dummy, or simply dummy, 
is a full-scale anthropomorphic test device 
that simulates the dimensions, *** ${name} *** weight proportions and
 articulation of the human body during a traffic collision`;

console.log(paragraph1);
