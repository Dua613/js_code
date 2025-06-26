
const course = {
    coursename : "intro to js" ,
    coursePrice : 1000,
    courseTeacher : "shari",
}

console.log(course.coursename);      //good and right syntax  but

const {coursename} = course
console.log(coursename);            //this syntax is much better

const {coursename : name} = course
console.log(name);                      //this is how we de-structure it





//*****************JSON writing syntax****************** */

// {
//     "name1" : "shari",
//     "coursename1" : "java",
//     "price1" : "free"
// }

// [
//     {}
//     {}
//     {}
// ]
