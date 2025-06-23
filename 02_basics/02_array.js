const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

//console.log(marvel_heros);


          //**************.PUSH************ */

//marvel_heros.push(dc_heros)         //it merg them but second arrays names are combined as one array

// console.log(marvel_heros);
// console.log(marvel_heros[2]);      
// console.log(marvel_heros[3][2]);          //in 3rd index it takes 3 names of dc_heros as a one array 
                                                 //we can use this but it isnt a good syntax

             //************** */.CONCAT*************                                    

 const allHeros = marvel_heros.concat(dc_heros)   //it merg them and take all names as separate arrays
 console.log(allHeros);


 //**************spread************ */

 const new_allheros = [...marvel_heros, ...dc_heros]   //same as concat but more preferred 
                                                     //because it can take as many as many we want
 console.log(new_allheros);                           //and concat

