let got = "shari"

//console.log(typeof got);
//console.log(typeof(got));

let valueInNumber = Number(got)
//console.log(typeof valueInNumber);
//console.log(valueInNumber) //Not a Number

//STRING INTO NUMBER
  // "33" => 33
  // "33abc" => NaN
  // "true" => 1, "false"=> 2
  //null => 0


let loggedin = "shari";

let booleanloggedin = Boolean(loggedin);
//console.log(booleanloggedin)

  //SO THE OUTCOME IS
    // 1 => true,  0 => false
    // "" => false,  "shari" => true

let numberis = 10

let stringNumber = String(numberis)
//console.log(stringNumber);
//console.log(typeof stringNumber)


//**********************  OPERATIONS  ***************************

let value = 4;
let negvalue = -value;
//console.log(negvalue)

/*console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2/2);
console.log(2**3);
console.log(2%2);*/

let value1 = "hello";
let value2 = " shari";
let value3 = value1 + value2;
//console.log(value3)

/*console.log("2" + 1)
console.log(1 + "2")
console.log("1" + 1 +1)
console.log(1  + 2 + "2")*/

//console.log(3+4*5%6)

let num1, num2, num3
mum1 = num2 = num3 = 2+2  // right but donot write like this!

let shari=2
shari++;
//console.log(shari)

//************PREFIX*************
let me = 3;
const you = ++me;
console.log(you)
console.log(me)
// me is 4; you is 4

//***********POSTFIX************** 
let m = 3;
const y = m++;
console.log(m)
console.log(y)
// m is 4; y is 3