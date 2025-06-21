const score = 201
console.log(score);
//NOTE!  already knows it is a number datatype

const marks = new Number(300)
console.log(marks);
//NOTE!  tells the datatype too!

console.log(marks.toString());
//NOTE!  number into string function

console.log(marks.toLocaleString().length);
//NOTE!  string function

console.log(marks.toFixed(4));
//NOTE!  adding decimal point function

const othermarks = 200.8943
console.log(othermarks.toPrecision(3));
//NOTE!  gives precise value and round off also function

const bigmarks = 10000000
console.log(bigmarks.toLocaleString());
//NOTE!  present it easy to read



           //++++++++++++++++++++MATHS+++++++++++++++++

console.log(Math);
console.log(Math.abs(-9));
//Note  neg into positive

console.log(Math.round(9.7));
//NOTE  do round off

console.log(Math.ceil(9.3));
//NOTE  gives greater value no matter what point is

console.log(Math.floor(9.8));
//NOTE  gives the exact value cut the point no matter what the point is

console.log(Math.min(9 , 6 ,4 ,8 ,2));
console.log(Math.max(9, 2 , 4 ,6));

console.log(Math.random());
//NOTE rando, number between 0 and 1
console.log((Math.random()*10) + 1);
//NOTE rando, number between 1 and 10... add +1 to avoid zero
console.log(Math.floor(Math.random()*10) + 1);
//NOTE  as we know what floor do



const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)
