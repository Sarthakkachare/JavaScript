// var mypromise=new Promise(function(res,rej){
//     const num1=5;
//     const num2=6;
//     if(num1==num2){
//         res();
//     }
//     else{
//         rej();
//     }
// });

// mypromise.then(()=>console.log("resolved"))
// .catch(()=>console.log("rejected"))


// function addition(val){
//     return val+5;
// }

// function subtraction(val){
//     return val-3;
// }

// function multiplication(val){
//     return val*5;
// }

// function division(val){
//     return val/7;
// }

// var myPromise=new Promise(function(resolve,reject){
//     let a=5;
//     if(a){
//         resolve(a)
//     }
//     else{
//         reject()
//     }
 
// });
// chaining promices 
// myPromise.then(subtraction).then(addition).then(multiplication).then(division) 
// .then((data)=>console.log("the answe is",data))

// .catch((e)=>console.log(e))

//promice.all

const promise1 = new Promise("First promiced Resolved");
const promise2 = new Promise("Second promiced Resolved");

Promise.all([promise1 , promise2])
.then((result)=>console.log(result))
.catch((e)=>console.log(e))
//howework
// Promise.race
// Promise.allSettled
// Promise.any