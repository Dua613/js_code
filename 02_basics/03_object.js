// Literals: Creating objects using {}.

// Constructor: Creating objects using a function or class.

// Singleton: Objects that only have one instance.

// Symbol: A unique and immutable data type often used as object keys.

// Nested Object: Objects inside objects.


//*************The two primary ways to declare objects in JavaScript are************ */

//Object Literal Notation: Using curly braces {} with key-value pairs directly inside. This is the most common and concise way to create an object.

// const obj = {
//   key1: 'value1',
//   key2: 'value2'
// };

//Object Constructor: Using the Object constructor function with the new keyword.

// const obj = new Object();
// obj.key1 = 'value1';
// obj.key2 = 'value2';

//Constructor objects are typically defined using a function, while literal objects are created directly using curly braces {} and a list of key-value pairs. 


//we will study object literals

const jsuser = {
    name: "shari",
    age : 18,
    location : "karachi",
    email: "baluchdua1@gmail.com",
    isloggedin: false,
    daysloggedin: ["monday", "sunday"],    // nested structure(array in object)
    "full name": "shari baluch",            //Property with Space in Key

}

//In JavaScript, you can access object properties in two main ways: (.)  ([""])

console.log(jsuser);                     //not good
console.log(jsuser.name);              //right but not preferred
console.log(jsuser["name"]);            //right and preferred way
console.log(jsuser["email"]);

//IF WANNA CHANGE VALUES

jsuser.name = "Dua"
 console.log(jsuser);

 //WE CAN FREEZE OUR code SO NO one can change it

 Object.freeze(jsuser)
jsuser.name = "shari"

console.log(jsuser);  


//********symbol in object*************
//Understanding the correct syntax for using symbols in programming is crucial for avoiding errors. Many candidates fail interviews due to a lack of knowledge about proper syntax and data types.

const sym = Symbol("key1")

const jsuser2 = {
    [sym]: "mykey1",
}

console.log(jsuser2[sym]);
