//**********************ARRAY***********************

const arr = [0, 1, 2, 3, 4]               //This is a array and values present inside called elements
const arr3 = new Array(1,2,3,4,5,6,)
const arr2 = ["shari" , "baloch"]

// console.log(arr[0]);
// console.log(arr[4]);
// console.log(arr3);


//****************ARRAY  METHODS**********************

// arr.push(5)                 //using above variable and push gives value from 0 to ...
// arr.push(6)
// arr.pop()                   //removes last value

//arr.unshift(7)              //adds it in first
// arr.shift()                  //removes the zero is unshift is commented

// console.log(arr);

// console.log(arr.includes(8));         //tells whether the value is icluded in array or not
// console.log(arr.indexOf(3));            //tells the index number and if number not included then -1
// console.log(arr.indexOf(8));



const newarr = arr.join()               //convert into string

// console.log(arr);
// console.log(typeof arr);
// console.log(newarr);
// console.log(typeof newarr);



//****************SLICE AND SPLICE****************** */

console.log("1st one", arr);

const arrSlice = arr.slice(1,3);
console.log(arrSlice);

console.log("after slice", arr);

const arrSplice = arr.splice(1,3)
console.log(arrSplice);

console.log("after splice", arr);

//CONCLUSION:  slice takes value from copy but splice manipulate original array!!




