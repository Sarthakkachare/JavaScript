let arr = ['sarthak' , 'sandip' , 'kachare'];
let obj = {
    fname :'sarthak' ,
    mname: 'sandip',
    lname:  'kachare',
};
console.log('for of loop with array');
for(const value of arr){
    console.log(value);
}
console.log('for Each loop with array');
arr.forEach(value=>{
    console.log(value);
});

for(let data in obj){
    console.log( data ,":",obj[data]);
}
console.log('for of loop with object');
// for(const value of obj){
//     console.log(value);
// }

console.log('for Each loop with object');
// obj.forEach(value=>{ 
//     console.log(value);
// });
