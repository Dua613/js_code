let name = "shari"
let ID = 2010

//console.log(name + ID + "value");
// NOTE! donot use this syntax as it is old and outdated now.

console.log(`hello my name is ${name} and my ID is ${ID}`);
//NOTE!  use this syntax


const gameName = new String('racing')

console.log(gameName);
console.log(gameName[0]);
console.log(gameName.length);
console.log(gameName.__proto__);
console.log(gameName.charAt(3));
console.log(gameName.indexOf('c'));
console.log(gameName.substring(0,3));
console.log(gameName.slice(0,2));
//NOTE!  functions... can be seen in soncole of google


const newstring = "      sharidua     "

console.log(newstring);
console.log(newstring.trim());
//NOTE!  remove spaces


const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))
//NOTE!  replace one value with another


console.log(url.includes('sundar'))
console.log(url.includes('hitesh'))
//NOTE!  checks and tells whether the word in store in variable or not!



const me = "shari-baluch-dua"
console.log(me.split("-"));

const mme = "shari1baluch1dua"
console.log(mme.split("1"));

//NOTE! it split basis on your given special letter or symbol



