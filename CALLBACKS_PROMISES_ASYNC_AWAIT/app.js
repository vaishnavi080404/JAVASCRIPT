console.log("1");   //syncronus programming 
console.log("2");
console.log("3");

// asyncronus programming

function greet() {
    console.log("Heelloo");

}
// setTimeout(greet ,3000) // greet fn will execute after 3sec ( 3sec = 3000ms)

// //OR

// setTimeout(() => {
//     console.log("Heelloo");
// },4000); 



console.log("4");
console.log("5");


// CALLBACK (is a function passed as an argument to another fn )


function sum(a,b) {
    console.log(a+b);
}

function calculator(a,b,sumCallback) {
    sumCallback(a,b);


}

calculator(1,2,sum)

// or

calculator(2,2,(a,b) => {
    console.log(a+b);
});




//CALLBACK HELL (nested callbacks)


// function getData(dataId, getNextData) {
//     setTimeout(() => {
//     console.log("data", dataId);
//     if(getNextData){
//         getNextData();
//         }
// }, 2000);
// }

// getData(1 , () =>{
//     console.log("getting data 2....");
//     getData(2,() => {
//         console.log("getting data 3....");
//         getData(3);
//     })
// });




// Promises is a object in js has 3 states pending, resolve, rejected 

// let promise =new Promise ((resolve ,reject) => {  //handlers in js
//     console.log("I'm a promise");
//     // resolve("sucess");
//     reject("some error occured");

// });


// function getData(dataId, getNextData) {
//   return new Promise((resolve , reject) => {
//     setTimeout(() => {
//             console.log("data", dataId);
//             resolve("success");
//             // reject("error occured");
//             if(getNextData){
//                 getNextData();
//                 }
//         }, 5000);

//   });

// }

// let result =getData(123);

// const getPromise =() => {
//     return new Promise((resolve,reject) => {
//         console.log("I'm a promise");
//         resolve("success");
//         // reject("error");
//     }) ;
// };

// let promise = getPromise();
// promise.then((res) => {
//     console.log("promise fulfilled",res);
// });

// promise.catch((err) => {
//     console.log("rjected",err);
// });


// function asyncFunc() {
//     return new Promise((resolve , reject) => {
//         setTimeout(() => {
//                 console.log("some data");
//                 resolve("success");
//                 // reject("error occured");
//             }, 2000);
// });
// }

// console.log("fetchin data...")
// let pr1 =asyncFunc1() ;
// pr1.then((res) => {
//     console.log("success");
// });


// PROMISE CHAINING
// function asyncFunc1() {
//     return new Promise((resolve , reject) => {
//         setTimeout(() => {
//                 console.log("some data");
//                 resolve("success");
//                 // reject("error occured");
//             }, 2000);
// });
// }


// function asyncFunc2() {
//     return new Promise((resolve , reject) => {
//         setTimeout(() => {
//                 console.log("some data");
//                 resolve("success");
//                 // reject("error occured");
//             }, 2000);
// });
// }



// console.log("fetchin data1...")
// asyncFunc1().then((res) => {
// console.log("fetchin data2...")
// asyncFunc2().then((res) => {});
// });


function getData(dataId) {
    return new Promise((resolve,reject) => {
    setTimeout(() => {
    console.log("data", dataId);
    resolve("success");
}, 3000);
});
}

// let d1 = getData(1);
// d1.then((res) => {
//     console.log(res);
// });

 //or

// getData(1).then((res) => {
//     console.log(res);
//     getData(2).then(() => {
//         console.log(res);
//     });
// });

// or  

// cahin of promises

// console.log("getting data1...");
// getData(1)
//    .then((res) => {
//     console.log("getting data2...");
//     return getData(2);
//    })
//    .then((res) => {
//     console.log("getting data3...");
//     return getData(3);
//    })
//    .then((res)=> {
//     console.log(res);
//    });


//Async Await

async function hello() {    // always returns a promise
    console.log("hello")
}

function api () {
    return new Promise ((resolve,reject) => {
        setTimeout(() => {
            console.log("weather data");
            resolve(200);
        },2000);
    });
}

async function getWeatherData() {
    await api();
    await api();
}


function getData(dataId) {
    return new Promise((resolve,reject) => {
    setTimeout(() => {
    console.log("data", dataId);
    resolve("success");
}, 3000);
});
}

async function Data() {
    console.log("getting data1...");
    await getData(1);
    console.log("getting data2...");
    await getData(2);
    console.log("getting data3...");
    await getData(3);
};

// or without calling the calling fn IIFE

(async function() {
    console.log("getting data1...");
    await getData(1);
    console.log("getting data2...");
    await getData(2);
    console.log("getting data3...");
    await getData(3);
    console.log("getting data4...");
    await getData(4);
    console.log("getting data5...");
    await getData(5);
    
}) ();



