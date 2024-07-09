const URL = "https://cat-fact.herokuapp.com/facts";
const factPara = document.querySelector("#fact");
const btn = document.querySelector("#btn");

// let promise = fetch(URL);
// console.log(promise);

const getFacts = async () => {
    console.log("getting facts....");
    let response = await fetch(URL);
    console.log(response);   // JSON format 
    // console.log(response.status);
    let data  = await response.json();  // to make response readable
    factPara.innerText = data[0].text;
};


// or  promise chaining

// function getFacts() {
//     fetch(URL)
//     .then((response) => {
//         return response.json();
//     })
//     .then((data) => {
//         console.log(data);
//         factPara.innerText = data[1].text;
//     });
// }





 btn.addEventListener("click", getFacts);
