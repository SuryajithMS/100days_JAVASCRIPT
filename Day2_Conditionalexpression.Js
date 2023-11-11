//Day2 Conditional Expression in JavaScript &   Ternary Operator
//let a= prompt("What is your age?")
let a="45"
a=Number.parseInt(a)
console.log(typeof(a))

if (a>10){
    console.log("You are a kid")
}
else if(a>20){
    console.log("You are a teenager")
}
else{
    console.log("You are an adult")
}

const expr="paper"

switch(expr){
    case"paper":
        console.log("paper")
        break;
    case"scissor":
        console.log("scissor")
        break;
    case"rock":
        console.log("rock")
        break;        
}

// Ternary Operator

console.log( a>18?"allowed":"not allowed")
