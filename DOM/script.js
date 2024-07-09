// console.log("Hello!!");
// alert("Hey! You :|");

// WINDOW OBJECT -- it represents an open window in a browser .it is browser's object (not javascript's) & is automatically created by browser . it is a global object with lots of properties & methods.

//  DOM (HTML ko JS k andar access krne ka tarika) -- When a web page is loaded the browser creates a Document Object Model of the page (which is a tree like structure)

//  we can access our html code / elements in js as in js html code is converted into objects & these objects are known as "DOCUMENT" & this document is available on window object this document comes in work when we want to changes our html code (light /dark mode)

//  console.dir(window);-- prints document ka property/methods

// console.dir(document.body.childNodes[1]);

// DOM MANIPULATION -- DYNAMIC CHANGE

let heading = document.getElementById("heading");

console.dir(heading);

let Class = document.getElementsByClassName("myClass");
console.dir(Class);
console.log(Class);

let parahs =document.getElementsByTagName("p");
console.dir(parahs);
console.log(parahs);

let elements= document.querySelector("p");
console.dir(elements);

// QUERY SELECTOR

// FOR TAGS

let firstEl= document.querySelector("p");  //1st element
console.dir(firstEl);


let allEl= document.querySelectorAll("p");  //1st element
console.dir(allEl);


// FOR CLASSES

let firstClass= document.querySelector(".myClass");  //1st element
console.dir(firstEl);


let allClass= document.querySelectorAll(".myClass");  //1st element
console.dir(allEl);

//  FOR ID


let firstId= document.querySelector("#myId");  //1st element
console.dir(firstId);

console.dir(document.body.firstChild);

let h2 = document.querySelector("h2");
console.dir(h2);
console.dir(h2.innerText);

h2.innerText= h2.innerText + "FROM APNA COLLEGE"; 


let boxes = document.querySelectorAll(".box");
let idx = 0;
for (box of boxes) {
    //  console.log(box);
    box.innerText =`new unique value ${idx}`;
    idx++;
}
console.log(boxes[2]);
boxes[0].innerText ="new unique value first";
boxes[1].innerText ="new unique value second";
boxes[2].innerText ="new unique value third";

let div = document.querySelector("div");
console.log(div);

let id =div.getAttribute("id");
console.log(id);

let parah =document.querySelector("p")
console.log(parah.getAttribute("class"));
console.log(parah.setAttribute("class","newClass"));

div.style.backgroundColor="green";
div.style.fontFamily="helvetica";

let newBtn = document.createElement("button");
newBtn.innerText="Click here!";
console.log(newBtn);

let div = document.querySelector("div");
div.append(newBtn);
div.prepend(newBtn);
div.before(newBtn);
div.after(newBtn)

let paras = document.querySelector("p");
paras.append(newBtn);
paras.remove();

let newHeading = document.createElement("h1");
newHeading.innerHTML ="<i>Hi, I'm new </i>"

document.querySelector("body").prepend(newHeading);

let btn = document.createElement("button");
btn.innerText="click me!";
btn.style.color="white";
btn.style.backgroundColor="red";

document.querySelector("body").prepend(btn);

let para = document.querySelector("p");
console.log(para.getAttribute("class"));
// console.log(para.setAttribute("class", "newClass"));
console.log(para.classList.add("newClass"));
console.log(para.classList.remove("newClass"));