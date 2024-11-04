// single line comment
/* multi-line comment */

variable = undefined;  // setting the value and the type to undefined
variable = null;  // empty an object preserve type
/*
typeof undefined      // undefined
typeof null           //  object

null === undefined    // false
null == undefined     // true
*/

// test if an object is empty.
if (typeof myObj !== "undefined" && myObj !== null)

  // typeof	Returns the type of a variable
  // instanceof	Returns true if an object is an instance of an object type

  /*
  console.log("john".constructor) [Function: String]
  console.log((3.14).constructor) [Function: Number]
  console.log(false.constructor)  [Function: Boolean]
  console.log(1234n.constructor)  [Function: BigInt]
  console.log({}.constructor) [Function: Object]
  console.log([].constructor) [Function: Array]
  console.log(new Date().constructor) [Function: Date]
  console.log(new Set().constructor)  [Function: Set]
  console.log(new Map().constructor)  [Function: Map]
  console.log(function () {}.constructor) [Function: Function]
  */



  // Object Destructuring, unpacking

  const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50
  };
let { firstName, lastName: name } = person;
firstName  // 'John'
name // 'Doe'

const fruits = ["Bananas", "Oranges", "Apples", "Mangos"];
let [fruit1, , fruit3] = fruits;
console.log(fruit3)  // Apples
let [fruit1, ...rest] = fruits;
console.log(rest)  // [ 'Oranges', 'Apples', 'Mangos' ]





// var declares a variable, older; Variables declared with the var always have Global Scope.
// let declares a block variable
// const declares a block constant

let y, z, a;
// You can also assign a value to the variable when you declare it:
const x = 5;
y = 6;
z = x + y
console.log(a)




// Arithmetic Operators
let x = 5, y
y = x++
console.log(y)




  // String
  `template
multi-line
string`
let word = "ABC";
word += "D"
console.log(word)
word.length  // 2
word[0] // A
word.at(-2) // A // supports negatives
word.charAt(0) // A // return "" if not found
word.charCodeAt(0) // 65  // ord()
// slice
word.slice(0, 4)  // ABCD
word.slice(-2)  // CD  / takes last two elemnts
word.slice(0, -2)  // AB  / drops two last elemnts
word.slice(1, -2)  // B  / from first elemen and two last elemnts
word.substring(0, 4)  // ABCD
// split by character, 
word.split('')  // split every char ['A', 'B', 'C']
word.split(',')  // split by ','
'123'.split()  // [ '123' ]
'123'.split('') // [ '1', '2', '3' ]
'123'.split(',')  // [ '123' ]
'123'.split(', ')  // [ '123' ]
word.join('')  // joins wihout any separator
word.join(',') // letters.join() by default joins with commas
//
word.toUpperCase()  // letter.upper()
word.toLowerCase()  // letter.lower()
letter === letter.toUpperCase() ? letter.toLowerCase() : letter.toUpperCase()  // isUpperCase() isLowerCase()
'nsnsn'.split('').filter(letter => letter === 'n').length  // 3 count()
// removes whitespaces
word.trim()  // strip()
word.trimStart()  // lstrip()
word.trimEnd()  // rstrip()
// padding
word.padStart(5, 'x')  // xABCD
console.log('john\'s') // escape '
  // convert, digit to string
  (45).toString()  // 45
console.log(String(45))  // 45
number.toString(2)  // decinal to binary
word.repeat(2)  // ABCDABCD
word.replace('a', 'b') // method replaces only the first match:
word.replace(/a/ig, 'b') // insensitive, global
'29'.replace(/\d/g, digit => digit < '5' ? '0' : '1')  // '01'
s = s.replace(/[\W_]/ig, '').toLowerCase();  // delete all non-alnumeric including underscore
word.replaceAll('a', 'b') // method replaces all matchs:
// index, find
let word = 'ABC';
word.indexOf('A', 0)  // 0
word.lastIndexOf('A', 0)  // 0  // strats from the end
'qwer'.split('').reverse().join('');  // rewq // string reverse through an array
word.includes('A')  // true  // in
word.search('A')  // 0  // index
word.search(/\d/) // -1
'a9b8'.match(/\d+/)  // for reqex // [ '9', index: 1, input: 'a9b8', groups: undefined ]
'a90b8'.match(/\d+/g)  // [ '90', '8' ]
'a9b8'.search(/\d+/)  // 1
word.match(/a/gi)  // [ 'A' ]
word.match(/\w/)  // isalnum()
word.match(/A/)  // [ 'A', index: 0, input: 'ABC', groups: undefined ]
word.match(/(A)/)[1]  // 'A'  // First capture group
word.startsWith('A', 0)  // true
// string interpolation
let word1 = 'AB';
let word2 = 'CD';
`Joined ${word1} and ${word2}`
console.log(Array.from("Hello"))  // [ 'H', 'e', 'l', 'l', 'o' ]
typeof '1' === 'string'  // instanceof

String(false)      // returns "false"
String(true)       // returns "true"
false.toString()   // returns "false"
true.toString()    // returns "true"








// numbers
// NaN Not a Number
console.log(NaN || 5)  // 5
console.log(isNaN(NaN))  // true
console.log(isNaN(NaN))  // true
isNaN(1 / 'a')  // true
typeof 1 === 'number'  // instanceof
typeof (NaN)  // number
typeof (Infinity)  // number
// hexadecimal to decimal
0xFF  // 255
let number = 255;
// decimal to hex
(255).toString(16);  // ff
number.toString(16);  // ff
// decimal to bin
number.toString(2);  // 11111111
// Greater than 9e15 ~= (2**53-1)
let y = BigInt(1234567890123456789012345)
let y = 1234567890123456789012345n
Number.isInteger(2)  // true
// round
(1.234).toFixed(2);  // 1.23  // trailing zeros
(1.234).toPrecision(2);  // 1.2
// convert to number
Number(true)  // 1
Number(false)  // 0
Number('10.3')  // 10.3
Number.parseInt('-10.3')  // -10  //
parseInt('-10.3')  // -10
parseInt(binary, 2);  // binary to decimal

// convert to number
Number("3.14")  // 3.14
Number(Math.PI)  // 3.141592653589793
Number("    ")  // 0
Number("")  // 0
Number(false)  // 0
Number(true)  // 1











// Array object
bucket = Array.from({ length: nums.length + 1 }, () => []);
board = Array.from({ length: n }, () => Array(n).fill('.'));  // n * n board filled with '.'
bucket = new Array(nums.length + 1);
for (let i = 0; i < bucket.length; i++) {
  bucket[i] = [];
}

const letters = ['B', 'C'];
const fruits = ["Banana", "Orange", "Apple", "Mango"];
Array.isArray(letters)  // true
letters instanceof Array  // true
letters.push('D')  // append the new value and returns the new array length
letters.pop()  // pop the last value and returns it
letters.shift()  // pop the first value and returns it
nums = [5, 3, 2, 1, 4]  // remove, discard, delete
nums.splice(3, 2, 'substitute') // [1, 4]; => nums = [5, 3, 2]
letters.unshift('A')  // append the new value at the beginning and returns the new array length
delete fruits[0]  // removes value but leaves empy index
letters[letters.length - 1] = 'D'
letters  // [ 'B', 'C', 'D' ]
letters[0]  // B
letters[0] = 'A'
const months = ["Januar", "Februar", "Mar", "April"];
const myMonths = months.with(2, "March");  // creates new object  //don't use, slow
const newPrefix = [...prefix, postfix[index]  // concat Arrays
letters.at(0)
letters.toString()  // B,C,D
letters.join('')  // joins wihout any separator
letters.join(',') // letters.join() by default joins with commas
letters.join(' and ')  // B and C and D
letters.length  // 3
letters.sort() // [ 'B', 'C', 'D' ]
letters[letters.length - 1]  // 'D'
//index
fruits.indexOf("Apple")  // 2
fruits.lastIndexOf("Apple")  // 2 // Finds last occurrence
fruits.includes("Apple")  // true  // 'Apple' in fuits
fruits.sort()  // sort in-place
fruits.reverse()  // reverse in-place and returns reversed object
fruits.toSorted()  // creates new sorted obj
fruits.toReversed()  // creates new reversed obj

Math.max.apply(null, numbers)  // find max in array
Math.max(...numbers)  // find max in array
Math.max.apply(1, 2, 3)  // find max provided numbers
Math.min.apply(null, numbers)  // find min in array
Math.max(...window.values())  // find max in iterator
Math.max(...Object.values(window))  // find max in iterator

// find
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let isAppleIn = fruits.find(findApple);  // The find() method returns the value of the first array element that passes a test function.
function findApple(fruit) {
  return fruit == 'Apple';
}
console.log(isAppleIn)  // Apple

let isAppleIn = fruits.findIndex(fruit => fruit == 'Apple');  // The find() method returns the index of the first array element that passes a test function.

console.log(isAppleIn)  // 2

// keys
const fruits = ["Banana", "Orange", "Apple", "Mango"];
for (let f of fruits.keys()) {
  console.log(f)
};
/*
0
1
2
3
*/
console.log(Object.keys(fruits))  // [ '0', '1', '2', '3' ]

// entries, items
const fruits = ["Banana", "Orange", "Apple", "Mango"];
for (let f of fruits.entries()) {
  console.log(f)
};
/*
[ 0, 'Banana' ]
[ 1, 'Orange' ]e
[ 2, 'Apple' ]
[ 3, 'Mango' ]
*/

console.log(Object.entries(fruits))
/*[
    [ '0', 'Banana' ],
    [ '1', 'Orange' ],
    [ '2', 'Apple' ],
    [ '3', 'Mango' ]
]*/



// joining arrays
const Array3 = [...permutation, nums[index]]
const Array3 = Array1.concat(Array2);
fruits.copyWithin(2, 0);
([[1, 2], [3, 4]]).flat() // [ 1, 2, 3, 4 ]


const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.splice(2, 1, "Lemon", "Kiwi"));   // adds new elements at (2) index and revmoves (1) from former shifted elements; [ 'Banana', 'Orange', 'Lemon', 'Kiwi', 'Mango' ]
fruits.splice(0, 1);  // The first parameter (0) defines the position where new elements should be added (spliced in). The second parameter (1) defines how many elements should be removed. The rest of the parameters are omitted. No new elements will be added. The splice() method returns an array with the deleted items:
fruits.toSpliced(0, 1);  // Similar to splpice but creates a new object
fruits.slice()  // make a clone  # .copy() 
fruits.slice(1)  // [ 'Orange', 'Apple', 'Mango' ]
fruits.slice(1, 3)  // [ 'Orange', 'Apple' ]


const person = {
  name: "John",
  age: 30,
  cars: [
    { name: "Ford", models: ["Fiesta", "Focus", "Mustang"] },
    { name: "BMW", models: ["320", "X3", "X5"] },
    { name: "Fiat", models: ["500", "Panda"] }
  ]
}

// print all car models
for (let car of person.cars) {
  for (let model of car.models) {
    console.log(`${car.name}: ${model}`)
  }
}

fruits.forEach(fruit => console.log(fruit))


// array compare
// O(nlogn) 
function comp(nums1, nums2) {
  if (!nums1 || !nums2) return false
  if (nums1.length != nums2.length) return false

  nums1.sort()
  nums2.sort()

  return nums1.map(num => num**2).every((num, index) => num === nums2[index])
}

// range
// range(start, length)
const range = (start, length) => 
  Array.from({ length: length }, (_, index) => (index) * start)
// range(start, stop)
const range = (start, stop) => 
  Array.from({ length: (stop - start) }, (_, index) => start + index)
// range(start, stop, length)
const range = (start, stop, step) => 
  Array.from({ length: Math.ceil((stop - start) / step) }, 
    (_, index) => start + (index * step))







// Object
// Create a JavaScript object
const person = { firstName: "John", lastName: "Doe" };
const dp = { [code.length]: 1 };

// in
'firstName' in person  // true

// keys()
const closing_brackest = Object.keys(oppos_brackets)
console.log(closing_brackest)  // [ ')', ']' ]
// values()
const opening_brackest = Object.values(oppos_brackets)
console.log(opening_brackest)  // [ '(', '[' ]
// like items() in Python; Object.entries(oppos_brackets))
for (let [key, val] of Object.entries(oppos_brackets)) {
  console.log(key + ': ' + val)
}

// Add Properties
person.age = 50;
person.eyeColor = "blue";


// To create an object type we use an object constructor function.
function Person(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
}

// The JavaScript prototype property allows you to add new properties to object constructors:
Person.prototype.nationality = 'Polish';

// The JavaScript prototype property also allows you to add new methods to objects constructors:
Person.prototype.name = function () {
  return this.firstName + " " + this.lastName;
};

// new Person()
const myFather = new Person("John", "Doe", 50, "blue");

// console.log(Object.entries(myFather))
// console.log(Object.keys(myFather))
// console.log(Object.values(myFather))
// console.log(Object.getOwnPropertyNames(myFather))  // like keys()
// console.log(Object.getOwnPropertyDescriptor(myFather, 'firstName'))  // { value: 'John', writable: true, enumerable: true, configurable: true }

// The Object.assign() method copies properties from one or more source objects to a target object.
// Create Source Object
const person2 = { firstName: "Anne", lastName: "Smith" };
Object.assign(myFather, person2);
// console.log(myFather);

// Object.entries() returns an array of the key/value pairs in an object:
for (let [key, val] of Object.entries(myFather)) {
  console.log(key + ': ' + val)
}

// Object to Map
const fatherMap = new Map(Object.entries(myFather));
console.log(fatherMap);

// The fromEntries() method creates an object from a list of key/value pairs.
const fruits_array = [
  ["apples", 300],
  ["pears", 900],
  ["bananas", 500]
];

const fruits = Object.fromEntries(fruits_array);
console.log(fruits);


// Object.values() is similar to Object.entries(), but returns a single dimension array of the object values:
console.log(Object.values(myFather))


// The Object.groupBy() method groups elements of an object according to string values returned from a callback function. method does not change the original object.
const fruits2 = [
  { name: "apples", quantity: 300 },
  { name: "bananas", quantity: 500 },
  { name: "oranges", quantity: 200 },
  { name: "kiwi", quantity: 150 }
];

// Callback function to Group Elements
function myCallback({ quantity }) {
  return quantity > 200 ? "ok" : "low";
}

// Group by Quantity
const result = Object.groupBy(fruits2, myCallback);


// The Object.keys() method returns an array with the keys of an object.
console.log(Object.keys(person));

// The Object.defineProperty() method can be used to:
// Adding a new property to an object
// Changing property values
// Changing property metadata
// Changing object getters and setters
Object.defineProperty(myFather, 'year', { value: '2008' }); // myFather['year'] = 2008;
console.log(myFather.year);
// All properties have a name. In addition they also have a value.
// The value is one of the property's attributes.
// Other attributes are: enumerable, configurable, and writable.
// The getOwnPropertyNames() method returns all properties.
// The Object.keys() method returns all enumerable properties.
// If you define object properties without enumerable:false, the two methods will return the same.


const car = {
  type: "Fiat",
  model: "500",
  color: "white",
  fullName: function () {
    return this.type + " " + this.model
  },
  get fullN() {
    return this.type + " " + this.model
  }
};
console.log(car.fullName())
console.log(car.fullN)



const oppos_brackets = { ')': '(' }
oppos_brackets["]"] = "["
console.log(Object.keys(oppos_brackets).length)  // 2

// merege objects to get all properities
console.log({ ...{ 'r': 1, 'a': 1, 't': 1 }, ...{ 'c': 1, 'a': 1, 'r': 1 } })  // { r: 1, a: 1, t: 1, c: 1 }


const car = { type: "Fiat", model: "500", color: "white" };
car.color = "red";
car.owner = "Johnson";
console.log(car)

// Deleting Properties
delete object.name
delete object['name']






// Set
// A Set has no keys, so keys() returns the same as values().
letters = new Set(['a', 'b'])
letters instanceof Set  // true
letters.add('c')
letters.has('a')  // true
letters.size  // 3
letters.keys()  // [Set Iterator] { 'a', 'b', 'c' }
letters.values()  // [Set Iterator] { 'a', 'b', 'c' }
letters.entries()  // [Set Entries] { [ 'a', 'a' ], [ 'b', 'b' ], [ 'c', 'c' ] }
for (let elem of new Set([2, 3])) {  // 'in' gives no answer
  console.log(elem)
}
const equalSets = (x, y) => x.size == y.size && [...x].every(num => y.has(num))  // equal, same





// Map
const fruits = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200],
])


console.log(fruits.keys())  // [Map Iterator] { 'apples', 'bananas', 'oranges' }
console.log(fruits.values())  // [Map Iterator] { 500, 300, 200 }
console.log(fruits.entries())  // [Map Entries] {[ 'apples', 500 ], [ 'bananas', 300 ], [ 'oranges', 200 ]}

fruits.set('oranges', 200)
//_don't use fruits['apples']
fruits.get('apples')  // 500
fruits.has('apples');  // true
fruits.delete("apples");
fruits.clear();  // removes all elements
fruits instanceof Map  // true

fruits.forEach((value, key) => {
  console.log(key, value)
});

for (const [key, value] of fruits) {
  console.log(key, value)
}
/*
apples 500
bananas 300
oranges 200

*/
for (const item of fruits) console.log(item)  // list key, val pairs
for (const key in fruits) console.log(key)  // ''
for (const key of fruits.keys()) console.log(key)  // list keys
for (const key in fruits.keys()) console.log(key)  // ''
for (const val of fruits.values()) console.log(val)  // list values
for (const val in fruits.values()) console.log(val)  // ''
for (const [key, val] of fruits) console.log(key)  // list keys
for (const [key, val] of fruits) console.log(val)  // list vals
for (const [key, val] of fruits) console.log(key, val)  // list key, val pairs 


/*
Differences between JavaScript Objects and Maps:
Object	                            Map
Not directly iterable	            Directly iterable
Do not have a size property	        Have a size property
Keys must be Strings (or Symbols)	Keys can be any datatype
Keys are not well ordered	        Keys are ordered by insertion
Have default keys	                Do not have default keys
*/








// Logical Operators
console.log(true && false)  // false // and
console.log(true || false)  // true // or
console.log(!true)  // false // not

// Conditional (Ternary) Operator
if (counts[num]) {
  counts[num]++
} else {
  counts[num] = 1
}

(counts[num]) ? counts[num]++ : counts[num] = 1;

let age = 4
let votable = (age >= 18) ? "Can vote" : "Cannot vote"
console.log(votable)

// The Nullish Coalescing Operator (??)
counts[num] = (counts[num] ?? 0) + 1;

let age = null;  // let age = undefined
let text = 'missing';
console.log(age ?? text)  // missing

// The Optional Chaining Operator (?.)
const car = { type: "Fiat", model: "500", color: "white" };
console.log(car?.name) // undefiend





// JavaScript Bitwise Operators
/*
Operator	Description	Example	Same as	Result	Decimal
&	AND	5 & 1	0101 & 0001	0001	 1
|	OR	5 | 1	0101 | 0001	0101	 5
~	NOT	~ 5	 ~0101	1010	 10
^	XOR	5 ^ 1	0101 ^ 0001	0100	 4
<<	left shift	5 << 1	0101 << 1	1010	 10
>>	right shift	5 >> 1	0101 >> 1	0010	  2
>>>	unsigned right shift	5 >>> 1	0101 >>> 1	0010	  2
*/
console.log(11 << 1)  // 5





// Shift Assignment Operators
let x = 11
x >>= 1
console.log(x)  // 5







// Logical Assignment Operators
// If the first value is false, the second value is assigned.
let x = undefined
x ||= 5
console.log(x)

// If the first value is true, the second value is assigned.
let x = 10
x &&= 5
console.log(x)

// The Nullish coalescing assignment operator is used between two values.
// If the first value is undefined or null, the second value is assigned.
let x;
x ??= 5;
console.log(x)





// this, method within object
const car = {
  type: "Fiat",
  model: "500",
  color: "white",
  fullName: function () {
    return this.type + " " + this.model
  }
};
console.log(car.fullName())







// if
if (condition1) {
  //  block of code to be executed if condition1 is true
} else if (condition2) {
  //  block of code to be executed if the condition1 is false and condition2 is true
} else {
  //  block of code to be executed if the condition1 is false and condition2 is false
}






// for loop
/*
for - loops through a block of code a number of times
for/in - loops through the properties of an object
for/of - loops through the values of an iterable object
while - loops through a block of code while a specified condition is true
do/while - also loops through a block of code while a specified condition is true
*/

const fruits = ["Banana", "Orange", "Apple", "Mango"];
const person = { fname: "John", lname: "Doe", age: 25 };
let language = "JavaScript";

for (let index = 0; index < fruits.length; index++) {
  console.log(fruits[index]);
};
`
Banana
Orange
Apple
Mango
`

// 'of' lootps through values
for (let fruit of fruits) {
  console.log(fruit);
};

// 'in' lootps through properties (keys)
for (let fruit in fruits) {
  console.log(fruits[fruit]);
};

fruits.forEach((fruit, index) => console.log(fruit));  // prints each furit
fruits.forEach((fruit, index) => console.log(index));  // prints index of each fruit

// for and forEach
for (let num of nums) {
  counts.set(num, (counts.get(num) ?? 0) + 1)
}

nums.forEach(num => {
  counts.set(num, (counts.get(num) ?? 0) + 1)
});



// while
while (i < 10) {
  text += "The number is " + i;
  i++;
}

// do
do {
  text += "The number is " + i;
  i++;
}
while (i < 10);










const car = {
  type: "Fiat",
  model: "500",
  color: "white",
};

car.fullName = function () {
  return this.type.toUpperCase() + " " + this.model;
}

for (let key in car) {
  console.log(car[key])  // cannot use car.key
}


const oppos_brackets = { ')': '(', "]": "[" }

for (let [key, val] of Object.entries(oppos_brackets)) {
  console.log(key + ': ' + val)
}







// Constructor Function for Solution objects
function Solution(problem, language, solution) {
  this.problem = problem;
  this.language = language;
  this.solution = solution;
  this.note = function () {
    return this.problem + ' solved in ' + this.language;
  };
}

const two_Sum = new Solution('Two Sum', 'Python', '[0, 1]')

console.log(two_Sum)  // Solution { problem: 'Two Sum', language: 'Python', solution: '[0, 1]' }

// Adding a property to a created object
two_Sum.testcase = 'Solution().two_sum()'

// Adding a new property to the constructor function prototype (not to an object constructor)
Solution.prototype.testcase = 'Solution()'

// Adding a method to a created object
two_Sum.note2 = function () {
  return this.problem + ' is in ' + this.language;
}
console.log(two_Sum.note2())

// Adding a method to a created object
two_Sum.modLanguage = function (name) {
  this.language = name
}

two_Sum.modLanguage('Py3')

console.log(two_Sum.language)

// Adding a method to the constructor function epe:
Solution.prototype.modLanguage = function (name) {
  this.language = name
}

two_Sum.modLanguage('Py3')

console.log(two_Sum.language)


// Adding a method to the String class
function capitalize(word) {
  return word[0].toUpperCase() + word.slice(1,)
}

String.prototype.toJadenCase = function () {
  return this.split(' ').map(capitalize).join(' ')
}

console.log("How can mirrors be real if our eyes aren't real".toJadenCase())

// Adding count method to Array class
Array.prototype.count = function (letter) {
  return this.filter(currentLetter => currentLetter === letter).length
}





// map
const numbers = [45, 4, 9, 16, 25];
const numbersDoubled = numbers.map(number => number * 2)


const digits = [1, 2, 3, 4, 5, 6];
const newDigits = digits.flatMap(digit => [digit, digit * 10]);


solution.push(board.map(row => row.slice()));  // [ '.', '.', 'Q', '.' ],
solution.push(board.map(row => row.join('')));  // [ '.Q..',



// filter
const numbers = [45, 4, 9, 16, 25];
const numbersFiltered = numbers.filter(number => number > 10)  // [ 45, 16, 25 ]



// all, every
const numbers = [45, 4, 9, 16, 25];
const numbersAll = numbers.every(number => number > 10)  // false


// any, some
const numbers = [45, 4, 9, 16, 25];
const numbersAny = numbers.some(number => number > 10)  // true






// JSON
// object -> string
// like json.dumps(), pd.read_json("mtcars.json")
JSON.stringify({ name: 'John', age: 30, city: 'New York' })  // {"name":"John","age":30,"city":"New York"}

// like json.loads(), mtcars.to_json()
// string -> object
JSON.parse('{"name":"John", "age":30, "city":"New York"}')  // { name: 'John', age: 30, city: 'New York' }



// function
// function defining
encode(words) { }
encode = (words) => { }
encode = function (words) { }


// function myFunction(a, b) {
// (const) myFunction = function (a, b) {
// (const) myFunction = (a, b) => {
return a * b;
}
// myFunction = (a, b) => (a * b);
console.log(myFunction(3, 4))




// var dir_reduc = (directions) => {
// var dir_reduc = function(directions) {
// dir_reduc = function(directions) {
// function dir_reduc(directions) {



const numbers = [4, 9, 16, 25, 29];
let first = numbers.find(findGreaterThan18);

function findGreaterThan18(value) {
  return value > 18;
}

let first = numbers.find(number => number > 18);


hello1 = function () {  // reqular function
  return "Hello World";
};
hello2 = () => { return 'Hello World'; };  // arrow function
hello3 = (word) => 'Hello ' + word;  // one statement arrow function
hello4 = word => 'Hello ' + word;  // one parameter, one statement arrow function
console.log(hello4('World'))

// In regular functions the this keyword represented the object that called the function, which could be the window, the document, a button or whatever.
// With arrow functions the this keyword always represents the object that defined the arrow function [object Window].

points.sort(function (x, y) { return (x - y) })
points.sort((x, y) => { return (x - y) })
points.sort((x, y) => (x - y))


// sort
const cars = [
  { type: "Volvo", year: 2016 },
  { type: "Saab", year: 2001 },
  { type: "BMW", year: 2010 },
];

function myFunction() {
  cars.sort(function (a, b) {
    let x = a.type.toLowerCase();
    let y = b.type.toLowerCase();
    if (x < y) { return -1 }
    else if (x > y) { return 1 }
    else { return 0 }
  })
}
myFunction()
console.log(cars)


'a'.localeCompare('b') // -1
'b'.localeCompare('a') // 1
'1'.localeCompare('2') // -1
'2'.localeCompare('1') // 1

// call() apply() call an object method with another object as argument.
const person1 = {
  fullName: function () {
    return this.firstName + " " + this.lastName;
  }
}

const person2 = {
  firstName: "John",
  lastName: "Doe",
}

// call() makes result
console.log(person1.fullName.call(person2))  // John Doe
// bind() makes a function
console.log(person1.fullName.bind(person2)())  // John Doe
/*
.call(): Immediately calls the function with a specified this value and individual arguments.
.apply(): Immediately calls the function with a specified this value, but arguments are passed as an array.
.bind(): Returns a new function with this bound to a specific object, which can be invoked later.
*/

// indefinite number of arguments as an array:
// reduce()
function sum(...args) {
  let sum = 0;
  for (let arg of args) {
    sum += arg;
  }
  return sum;
}

let x = sum(4, 9, 16, 25, 29, 100, 66, 77);
console.log(x)








// Class
class Solution {
  constructor(words) {
    this.words = words;
  }

  encode = function () {
    let encoded = '';

    for (let word of this.words) {
      encoded += 'Τ';
      encoded += word.length;
      encoded += word;
    }

    return encoded
  }
}
// let encode1 = new Solution(["code", "site", "love", "you"])
// console.log(encode1.encode())
console.log(new Solution(["code", "site", "love", "you"]).encode())


class Lego {
  constructor(theme) {
    this.theme = theme;
  }
  getTheme() {
    return 'It\'s a ' + this.theme
  }
}

class Interest extends Lego {
  constructor(theme, interest) {
    super(theme);
    this.interest = interest;
  }
  getInterest(exclamation) {
    return this.getTheme() + ' ' + this.interest + exclamation
  }
}

const technic1 = new Lego('techinc')
console.log(technic1.getTheme())

const interest1 = new Interest('techinc', 'truck')
console.log(interest1.getInterest('!'))








// Boolean
Boolean(10 > 5)  // true
10 > 5  // ture
Boolean(0)  // false
Boolean('')  // false
Boolean(undefined)  // false
Boolean(10 / 'Hello')  // false






// Math
Math.random()  // 0:1
Math.floor(Math.random() * 10)  // 
Math.PI  // 3.14
Math.SQRT1_2  // 1.41
Math.LN2  // 0.69
Math.LN10  // 2.3
Math.round(4.6)  // 5  // 5.toFixed(2) => 5.00
Math.ceil(4.6)  // 5
Math.floor(4.6)  // 4
Math.trunc(4.6)  // 4
Math.sign(4.6)  // 1 if positive
Math.pow(2, 5)  // 32
Math.sqrt(64)  // 8
Math.abs(-2)  // -2
Math.min(1, 2, 3)  // 1
Math.max(1, 2, 3)  // 3
Math.log(2)  // 0.69 base e
Math.log2(8)  // 3
Math.log2(8)  // 3
Math.log10(100)  // 2






// reduce
[1, 2, 100, 3].reduce((total, current) => total + current)  // 106  // sum (replacement)
[1, 2, 100, 3].reduce((maxNumber, current) => maxNumber > current ? maxNumber : current)  // 100  // get max element








// setter getter
class Rectangle {
  constructor(height, width) {
    this._height = height;
    this._width = width;
  }

  get height() {
    return `${this._height.toFixed(2)} cm`
  }

  get width() {
    return `${this._width.toFixed(2)} cm`
  }

  set height(newHeight) {
    if (newHeight > 0) {
      this._height = newHeight;
    } else {
      console.log("Height must be greater than 0")
    }
  }

  set width(newWidth) {
    if (newWidth > 0) {
      this._height = newWidth;
    } else {
      console.log("Height must be greater than 0")
    }
  }

  deleteHeight() {
    delete this._height
    console.log("Height deleted.");
  }

  deleteWidth() {
    delete this._width
    console.log("Width deleted.");
  }
}

const rectangle1 = new Rectangle(2, 5)
rectangle1.height = 3;
rectangle1.width = 6;

rectangle1.deleteHeight()

console.log(rectangle1.height)
console.log(rectangle1.width)


