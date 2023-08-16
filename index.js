//Object

let test = {
  name: "tariq",
  phoneNumber: "02323232",
  address: "Lahore",

  get getName() {
    return this.name;
  },

  set setName(_name) {
    this.name = _name;
  },
};

test["firsname"] = "abc";

test.lastName = "xyz";
test.setName = "tariq override";

let compnayNameField = "CompanyName";
let compnayNameValue = "xyz.com";

//dynamically setting th eperopty to object
test[compnayNameField] = compnayNameValue;

//console.log(test.getName);
//console.log(typeof test);

//console.log(test.getName());

/*
let _obj = Object.create(test);
console.log(_obj.name);
*/

//console.log(Object.keys(test));
//console.log(Object.values(test));

//delete test.name;

test["showName"] = function () {
  return this.name;
};

//console.log(test, test.showName());

// for (let key in test) {
//   console.log(key, test[key]);
// }

function Person(name, lastname, age) {
  this.name = name;
  this.lastName = lastname;
  this.age = age;
}

let p1 = new Person("xyz", "abc1", "23");
let p2 = new Person("abc", "abc2", "33");

// p1["showName"] = function () {
//   return this.name;
// };

Person.prototype.showName = function () {
  return this.name;
};

console.log(p1.showName());
console.log(p2.showName());
