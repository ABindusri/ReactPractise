console.log("day2")
//Normal Function
function add1(a,b){
    let sum = a+b;
    return sum;
}
console.log(add1(13,4));
//Arrow Function
const add =(a,b)=>a+b;
console.log(add(3,4));
const sub =(x,y)=>{
    let val=x-y;
    return val;
}
console.log(sub(13,4));

//Template literals - mainly used for multi line strings & String interpolation

//Using String concatination
let bindu = "Atyam Bindu Sri";
let age = "25";
console.log("Helo hi " +bindu + " My age is " +age)

//Using backticks
console.log(`My name is ${bindu} & My Age is ${age}`)
