
//Strings -- strings are immutable

let string ="javascript";
let str1='mern stack';

console.log(str1.length);
console.log(string[4]);  //index



//Template Literals
/*A way to have embedded expressions in strings
string interpolation - to create strings by doing substitution of placeholders*/

let specialString =`This is a template literals - string in backticks ${1+2+3} `;
console.log(specialString);


let obj ={
    item : "pen",
    price:10
};
console.log("the cost of", obj.item,"is",obj.price,"rupees");
console.log(`the cost of ${obj.item} is ${obj.price} rupees`)  // template literals  

console.log("Vaishnavi\nKhedekar");  // length =12
console.log("Vaishnavi\tKhedekar"); // escape characters



//String Methdos in Js 

let s1 = "laptop"
console.log(s1.toUpperCase());  // does  ot changes the orginal string gives a new string


let item = "laptop"
console.log(item.toLowerCase());


// str.trim --removes the starting and ending spaces

let something = "   jkjg klm  "
console.log(something.trim()) 


// str.slice(start,end)-- gives the element from start idx till the end -1 idx starting idex is neccessary to pass


let fruits ="mango, apple,orange";
console.log(fruits.slice(1,4))   


//(str1.concat(str2));  //string concatination

let str2 = 'vaishnavi';
let str3 ='khedekar';
console.log(str2.concat(str3)); 
console.log(str2+str3);


//str.replace

let alphabets='abcdefghj';
console.log(alphabets.replace("j","i")); 
console.log(alphabets.charAt(6)); //str.charAt(idx)  give element at that idx
//str[0]="h" // not possible original string is immutable thus use replace




// username maker using string methods.
let userName=prompt("enter ur username");
userName=("@"+userName+userName.length);
console.log(userName);
console.log(userName.length);




// Arrays - collection of items.,also object is known as collection of items but related items like student's info

let marks=[98,90,75,80,60];
console.log(marks);
console.log(marks.length) // property -just returns a value , method does some work.
console.log(typeof(marks)) // ojbect array is basically key value pair where instead of key we've index like at 0th idx __ is the value


// array indices
console.log(marks[4]);
console.log(marks[5]);
console.log(marks[4]=66); //mutable unlike strings
console.log(marks);

// looping over array

let flowers=["sunflower","roses","lily","lotus","mogra","hibiscus"];
//for loop
for(let i =0;i<flowers.length;i++){
    console.log(flowers[i]);

}

// for of loop
for(let flower of flowers){
    console.log(flower);
}

let cities=["mumbai","pune","nashik","nagpur","delhi"];
for (let city of cities){
    // console.log(city);
    console.log(city.toUpperCase());
}



let marks1=[85,97,44,37,76,60];
let total= 0;

for(let i=0;i<marks1.length;i++){
    total=total+marks1[i];
}
console.log(total);

let avg = total/marks1.length;
console.log(`avg marks of clas =${avg}`);


// or
for( let val of marks1){
    total+=val;
}


/*
let items=[250,645,300,900,50];

let i =0;
for(let val of items){
    // console.log(`value at idx ${i}=${val});
    let offer = val/10;
    items[i]= items[i]- offer;
    console.log(`value after offer=${items[i]}`)
    i++;
}
*/
let items=[250,645,300,900,50];

for(let i=0;i<items.length;i++){
    let offer = items[i]/10;
    items[i]= items[i]-offer;   
}
console.log(items);

// Array methods



let foodItems=["pasta","icecream","chocolate","coffee","frankie"];
console.log(foodItems.push("fries"));    //push  -- add to end
console.log(foodItems.unshift("pizza"));       //add to start

let scores = "78 , 96, 85, 65, ";
console.log(scores.toString());        //converts to string


let companies=["Blooberg","Microsoft","Uber","Google","IBM","Netflix"];
console.log(foodItems.pop("Uber"));          // pop -- remove from end
console.log(companies.shift());             //  delete from start
console.log(companies.splice(2,1,"Ola"));   // str.splice(start/add, delCount/remove,newEL1/replace)
console.log(companies.slice(1,3))           //str.slice(start,end) ending idx is non inclusive
console.log(companies.push("Amazon"));

// concat -- does not change original array creates a new array

let marvelHeroes =["thor","spiderman","ironman"];
let dcHeroes =["superman","batman"];
Heroes=(marvelHeroes.concat(dcHeroes));
console.log(Heroes);



// Array methods- map

//arr.map(callbackfnx(value,idx,arr))

let numbs=[1,2,3,4,5]
numbs.map((val)=>{
    console.log(val);

});

let nos=[2,4,6,8,10]
let newArr=nos.map((val)=>{
   return(val**2);
});

console.log(newArr);


// filter method

let arrr=[5,7,8,4,9,11,34,3,66,78];

let evenArr= arrr.filter((val)=>{
   return val%2===0;
});
console.log(evenArr)

// reduce mthd

let arr1=[1,2,3,4];
const output = arr1.reduce((res,curr)=>{
   return res+curr;
});
console.log(output);

let arr2=[10,20,15,3,8];
const out = arr2.reduce((prev,curr)=>{
   return prev > curr ? prev: curr;  // 
});
console.log(out);


let marks2=[80,85,75,96,92,90,93];

let scored90_above=marks2.filter((val)=>{
   return val>90;
});
console.log(scored90_above);


let numz= prompt("Enter the number:");
let arrayy=[];
for(let i =1;i<=numz;i++){
   arrayy[i-1]=i;  // 1(0),2(1),3(2)...
}
console.log(arrayy);

const summ = arrayy.reduce((res,curr)=>{
    return res+curr;
});
console.log(summ);

const product=arrayy.reduce((res,curr)=>{
    return res*curr;
});
console.log(product);

// for Each loop in Array

let arr =["pune","mumbai","delhi","nashik"];

arr.forEach((val,idx,arr)=>{
    console.log(val.toUpperCase(),idx,arr); // val.toUPperCase
});