// function add(a, b) {
//   return a + b;
// }
//
// console.log(add(3, 1));
//
// var toAdd = [9,5,10];
//
// console.log(add(...toAdd));
//
// var groupA = ['James', 'Anna'];
// var groupB = ['Ethan', 'Mia'];
// var final = [3, ...groupA];

var person1 = ['James', 35];
var person2 = ['Anna', 32];

function greet(name, age) {

  console.log('Hi ' + name + ', you are ' + age);
}

greet(...person1);
greet(...person2);

var names = ['James', 'Anna'];
var final = ['Ethan', 'Mia', ...names];

final.forEach(function (name) {
  console.log('Hi ' + name);
});
