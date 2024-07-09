let btn1 =document.querySelector("#btn1");

 btn1.onclick = () => {
    console.log("clicked me!");
    let a=25;
     console.log(a);
    a++;

}

let box = document.querySelector("#box");

box.onmouseover = () => {
    console.log("u r inside the box");

}

btn1.onclick = (evt) => {
    console.log(evt);
    console.log(evt.type);
    console.log(evt.target);
    console.log(evt.clientX,evt.clientY);

}

box.onmouseover = (evt) => {
    console.log(evt);
    console.log(evt.type);
    console.log(evt.target);
    console.log(evt.clientX,evt.clientY);


}


btn1.addEventListener("click", () => {
    console.log("button1 was clicked once");
})

btn1.addEventListener("click", () => {
    console.log("button1 was clicked twice");
})

const thrice =  () => {
    console.log("button1 was clicked thrice");
};

btn1.addEventListener("click", thrice) ;

btn1.addEventListener("click", () => {
    console.log("button1 was clicked quadruple");
})

btn1.addEventListener("click", (evt) => {
    console.log("button1 was clicked");
    console.log(evt);
    console.log(evt.type);

})

btn1.removeEventListener("click",thrice);


let modeBtn = document.querySelector("#mode");
let currMode = "light" ;

modeBtn.addEventListener("click", () => {
   if(currMode === "light") {
    currMode = "dark";
    document.querySelector("body").style.backgroundColor ="black";
   }
   else {
    currMode ="light";
    document.querySelector("body").style.backgroundColor ="white";
   }

   console.log(currMode);
});


let mode_btn = document.querySelector("#mode");
let body = document.querySelector("body");
let curr_mode = "light" ;

mode_btn.addEventListener("click", () => {
   if( curr_mode === "light") {
    curr_mode = "dark";
    body.classList.add("dark");
    body.classList.remove("light");

   }
   else {
    curr_mode ="light";
    body.classList.add("light");
    body.classList.remove("dark");
}
console.log(curr_mode);


});