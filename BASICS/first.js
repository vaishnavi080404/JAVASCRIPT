console.log("WELCOME!");
console.log("VAISHNAVI");
// It prints whatever is there in the brackets

// VARIABLES(always write a proper variable name (if age then age if name then name etc) and a/b/c)
// Variables are containers for storing values these values changes with time.


fullName = "Vaishnavi Khedekar";
age = 19; // these equal to means the right one is assigned to the left one(assignment operator).
subject = "programming lang";
console.log(fullName);

// Boolean value
isFollow = false
console.log(isFollow);

// Dynamically Typed Variable(no need to define the type of variable the js interpreter calculates at the runtime that which datatype is there in the variable if u are using like int,float ,str directly write what variable u want in proper way i.e. if ur variable name is name then just store name in it & nothing else,eventhough u can store age or something else but it's not a good practice.)
fullName = 19;
console.log(fullName) // not a good practice


// RULES
// Variable names are case sensitive ; 'a','A' is different.
fullname="vaishnavi.k"
fullName="vidhi.k"
console.log(fullname);

// only letters,digits,underscore and $ is allowed (not even space)
 programming_lang = 'java';
 name ='javascript';
 $surname="webdev"
 console.log(programming_lang);

//  only a letter,underscore or $ should be 1st character
_name = 'java';
console.log(_name);

// "reserved words" cannot be a variable names.
// for eg. 
// console ="webdev";
// console.log(console);

Console = "webdev";
console.log(Console); // case sensitive thus 'c'& 'C'.

//fullName -- CAMELCASE(mostly use this [popular])
//full_name -- SNAKECASE
// full-name --KABABCASE
// FullName --PASCALCASE

//the way variables are defined above is "WRONG" in JS.

// var : variables can be re-declared & updated. *A global(can be used anywhere throughout the code) scope variable.
// let : variable cannot redeclared but can be updated . *A block {code} scope variable.
// const: variable cannot redeclareed or updated. *A block scope variable.

//** 
var cart ="earrings";
var cart = "books"; // can re-declare and update  that creates confusion
console.log (cart)


let laptop  ="hp";
laptop = "dell"; // cannot reclare but update.
let food="pasta";
let hobby ="art";
console.log(laptop);

const PI= 3.14;
console.log(PI);
// PI = 599; throws error, connot redeclare & updated(fixed)

let a ; // no value so undefined 
a= 10; // prints this value.
console.log(a)
// const b; throws error 
// b= 11;
//const b=11  ['proper way']
// console.log(b)

// MOSTLY USE let & const for variable declaring

// block scope (let & const)

{
    let a = 5;
    console.log(a);
    // let a = 2 throws error cannot redeclare same variable in same block
}
{
let a =2;
console.log(a);// can redeclare in another new block.
}

//DATATYPES - PRIMITIVE(7) NUMBERS ,STRINGS, BOOLEAN,UNDEFINED, NULL, BIGINT,SYMBOL

let flower ="sunflower";
console.log(flower);
console.log(typeof(flower));
let price =100;
console.log(price);
console.log(typeof(price));
let isFriend= false;
console.log(isFriend);
console.log(typeof(isfriend));
let c ;
console.log(c);
console.log(typeof(c)); //undefined
let z =null;
console.log(z);
console.log(typeof(z));   //object
let x= BigInt("456") // stores big integers
console.log(x);
console.log(typeof(x));
let y = Symbol("hello!!");
console.log(y);
console.log(typeof(y));

// Non-Primitive
// OBJECT (COLLECTION OF VALUES )
const student ={
    fullName :"Rahul Kumar",
    age: 20,
    cgpa: 8.2,
    isPass: true,
};
student ["age"]= student ["age"]+1;
student ["name"]= "Neha Sharma";
console.log(student.age); //or it's a key:value pair
 console.log(student["age"]);
 console.log(student["name"]);

 const pen = {
    title :"Ball pen",
    rating:4,
    offer:5,
    price:270,
 };

 console.log(pen);

 const profile ={
    userName:"@Vaishnavi",
    isFollow:true,
    followers:1000,
    following:200,
    posts:10,

 };



 
// Operators - Arithmetic operators
let r =2;
let s = 4;
// let q= r+s;
console.log("r=",r ,"& s=",s);
console.log("r+s=",r+s);
console.log("r-s=",r-s);
console.log("r*s=",r*s);
console.log("r/s=",r/s);
console.log("r%s=",r/s);
console.log("r**s=",r**s);  //power (exponentiation)

//  unary operators

let w =2;
let v = 4;
w=w++; // post inc/decre
w=w--;


console.log(w);
console.log("++w =",++w); //pre inc/decre

// assignment operators
let e =5;
e+=4; // a+4 --> 5+4=9
e-=4;
e*=4;
e/=4;
e%=4;
e**=4;
console.log("e=",e);

// comparison operators(returns boolean value)
let t =4;
let u =6;//number
let f= "6"//string -> number 
let i= "3"
console.log("4==6",t==u);
console.log("4>=6",t>=u);
console.log("4<=6",t<=u);
console.log("4!=6",t!=u);
console.log("u==f",u==f);
console.log("u==i",u==i);
console.log("u===f",u===f);//strictly checks (equal to & datatype)
console.log("u!==f",u!==f);

//logical operators 

let j = 8;
let k = 6;
let cond1 = j>k;//true
let cond2 = k===6;//true
let cond3 = j===k;//false
console.log("cond1 && cond2=",cond1 && cond2);
console.log("cond1 && cond2=",cond1 && cond3);

console.log("cond1 && cond2=",cond1 || cond3);
console.log("!(j>k)=",!(j>k));

