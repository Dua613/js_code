const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

//console.log(marvel_heros);


          //**************.PUSH************ */

//marvel_heros.push(dc_heros)         //it merg them but second arrays names are combined as one array
                                       //it adds array in original 

// console.log(marvel_heros);
// console.log(marvel_heros[2]);      
// console.log(marvel_heros[3][2]);          //in 3rd index it takes 3 names of dc_heros as a one array 
                                                 //we can use this but it isnt a good syntax

             //************** */.CONCAT*************                                    

 const allHeros = marvel_heros.concat(dc_heros)   //it merg them and take all names as separate arrays
 console.log(allHeros);                            //it creates brand new array


 //**************spread************ */

 const new_allheros = [...marvel_heros, ...dc_heros]   //same as concat but more preferred 
                                                     //because it can take as many as many we want
 console.log(new_allheros);                     //but is more modern concise and readable



               //******************FLAT******************************

const another_array = [1,2,3,4,5, [6,7,] , 8 , [8,[10,11]]]
const new_another_array = another_array.flat(Infinity)    //takes all as one array

console.log(new_another_array);


//*************ARRAY is of from******************* */

console.log(Array.isArray("Hitesh"))    //asking is it a array
console.log(Array.from("Hitesh"))
console.log(Array.from({name: "hitesh"})) // interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));