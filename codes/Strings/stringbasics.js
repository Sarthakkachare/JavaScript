let str1 = "sarthak";//string literal
let str2 = new String("sarthak");//string object  ---->same ass java concept 

console.log(str1 == str2);//check the data
console.log(str1 === str2);//check the type

let a = '8';
let b = 8;

console.log(a == b);
console.log(a === b);

let pi= 3.14;
console.log(pi);

let pii = Math.PI;
console.log(pii);

let pow = Math.pow(8 , 2);
console.log(pow);

let sqt = Math.sqrt(86);
console.log(Math.round(sqt));//0.5 se greater then take ceil value  if is it less then it will be 
console.log(Math.ceil(sqt));//large
console.log(Math.floor(sqt));//small

console.log(Math.floor(Math.random()*11));
for (let i = 0;i<5;i++){
console.log(Math.floor(Math.random()*(30-20)+56));// 30 - 20 = 10  1 chya pudchya 10 value  yenar
}