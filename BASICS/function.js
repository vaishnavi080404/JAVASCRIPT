
// Functions - Block of code that performs specific task,can be invoked/call whenever needed. & Methods


/*
function funcName(){  //function definition
    //do some work
}

function funcName(param1,param2,...){  //function call
    //do some work
}
*/


function myFunction(){
    console.log("welcome!");
    console.log("learning JS!");
}
myFunction();
myFunction();

/*function myFunction(msg){  // parameter ->input used in function definition
    console.log(msg);
}
myFunction("learning JS!"); // argument used in function call
*/


function addNumbers(a,b){
    console.log(a+b);

}
addNumbers(121,883);

function addNum(a,b){ // local variables -> scope func params are local variables of function they are block scope
    result= a+b;
    console.log("before return")
    return result;
    console.log("after return")  //unreachable
}
let res = addNum(2,3);
console.log(res);

// Arrow Functions
//  compact way of writing function

/*const funcName=(p1,p2...)=>{
    // do so work
}*/


// subtract func
function sub(a,b){
    return a-b;
}
const arrowSum=(a,b)=>{
    console.log(a+b);
};


arrowSum(8,2);

function mul(x,y){
    return x*y;
}

mul(8,8)
const arrowMul=(x,y)=>{
    console.log(x*y);

};

arrowMul(8,2);

const printHello =()=>{

console.log(":)")
}

printHello();

function countVowels(str){
    let count =0;
    for(const char of str){
        if( char==="a"|| char==="e"||char==="i"||char==="o"||char==="u"){
            count++;
        }
    }

    return(count);

}

const arrowVowels=(str)=>{
    let count =0;
    for(const char of str){
        if( char==="a"|| char==="e"||char==="i"||char==="o"||char==="u"){
            count++;
}
}
return(count);
}

/* HIGHER ORDER FUNCTION/METHODS- THEY EITHER TAKE ANOTHER FUNC AS PARAM INSIDE THEM OR RETURNS ANOTHER  FUNC AS THEIR O/P*/


//forEach loop in ARRAY (arr.forEach(callBackFunction) callBackFunction -- to execute for each element in array --it is passed as an argument to another function)

let aray =[1,2,3,4,5];

aray.forEach(function printVal(val){
    console.log(val);
});

let nums=[2,3,4,5];
nums.forEach((num)=>{
    console.log(num*num);
});

let calcSquare =(num)=>{
    console.log(num*num);
};
nums.forEach(calcSquare);



let Arr =["pune","mumbai","delhi","nashik"];

Arr.forEach((val,idx,arr)=>{
    console.log(val.toUpperCase(),idx,arr); // val.toUPperCase
});