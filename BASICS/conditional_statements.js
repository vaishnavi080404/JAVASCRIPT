
// conditional statement

// if statement
let birthYear = 2008;
if (birthYear<=2004){
    console.log("can vote!");
}
// if(birthYear>=2004)
else
{
    console.log("can't vote!")
 }

let Mode = "dark";
let Color;

if(Mode==="dark"){
    Color="black";
}
// if(mode==="light")
else // else statement
{
    Color="white";
}
console.log(Color);


let number = 5;
if (number%2==0){
    console.log(number,"is EVEN");
}
else{
    console.log(number,"is ODD")
}


// else if  (when we need to check multiple statements)

let mode= "silver"
let color;

if(mode=="dark"){
    color ='black';
}
else if (mode=="pink"){
    color="pink";
}

else if(mode=="blue"){
    color ="blue";
}
else{
    color="white";
}
console.log(color);

// ternary operator

let years = 25;

let result = years>=18 ? "adult":"not adult";
console.log(result)

// switch statement

const expr ="Papayas"
switch (expr){
    case "Oranges":
        console.log("ORanges");
        break;
        case "Mangoes":
            case "Papayas":
                console.log("ppp");//o/p
                break;
                default:
                    console.log("sorry");
}

let num = prompt("Enter a number:");
console.log(num);

if (num%5==0){
    console.log(num,"is multiple of 5");
}
else{
console.log(num,"is not multiple of 5");
}

let score =prompt("Enter ur scoreNN") ;
let grade ;

if (score>=90 && score<=100){
    grade="A";
}
else if(score>=70 && score<=89){
    grade ="B";
}
else if(score>=60 && score<=69){
    grade="C";
}
else if(score>=50 && score<=59){
    grade ="D";

}
else if(score>=0 && score<=49)
{
    grade ="F";
}
console.log("your grade is:",grade);

