//**********no we will study constructor(singleton)******************* */
       // const shari = new Object()


//const webUser = new Object()
const webUser={}

webUser.name= "shari" 
webUser.ID = 12345
webUser.loggedIn = false

//console.log(webUser);



const anotherUser = {
       email: "baluch@gmail.com",
       fullname:{
        userfullname:{
              firstname:"shari" ,
              lastname:"baluch",
        }
       }

}
//console.log(anotherUser);



//const obj1 = {1: "a", 2:"b"}
//const obj2 = {3: "a", 4:"b"}

//const obj3 = {obj1,obj2}               //wrong syntax
//const obj3 = Object.assign(obj1,obj2)       //it merge objects
//const obj3 = Object.assign({}, obj1,obj2)         //by adding {} at beginning is also a good syntax

//console.log(obj3);

const obj1 = {1: "a", 2:"b"}
const obj2 = {3: "a", 4:"b"}

const obj3 = {...obj1, ...obj2}      //90% this syntax is used

//console.log(obj3);



console.log(webUser);
console.log(Object.keys(webUser));        //these are very important and will be use in database
console.log(Object.values(webUser));       
console.log(Object.entries(webUser));      //will be used less but stil important


console.log(webUser.hasOwnProperty("loggedIn"));
console.log(webUser.hasOwnProperty("logged"));         //tells whether the property is present or not
