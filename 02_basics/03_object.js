//*************2 ways of declaration of object************ */

//      literals(multiple instance) and constructors(singleton)

//singleton are introduced as a concept where only one instance of an object is created when using     a   constructor.     object.creat    1.decalartion way

//literal         const variable = {}     2.decalaration way


//we will study object literals


const jsuser = {
    name: "shari",
    age : 18,
    location : "karachi",
    email: "baluchdua1@gmail.com",
    isloggedin: false,
    daysloggedin: ["monday", "sunday"],
    "full name": "shari baluch",

}

console.log(jsuser);             //not good
console.log(jsuser.name);              //right but not preferred
console.log(jsuser["name"]);            //right and preferred way
console.log(jsuser["ëmail"]);


//********symbol in object*************
//Understanding the correct syntax for using symbols in programming is crucial for avoiding errors. Many candidates fail interviews due to a lack of knowledge about proper syntax and data types.

const sym = Symbol("key1")

const jsuser2 = {
    [sym]: "mykey1",
}

console.log(jsuser2[sym]);


//IF WANNA CHANGE VALUES

jsuser.name = "Dua"
 console.log(jsuser);

 //WE CAN FREEZE OUR SO NO one can change it

 Object.freeze(jsuser)
jsuser.name = "shari"

console.log(jsuser);  



