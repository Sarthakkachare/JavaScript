let a = 10;
var b = 20;
const c = 30;
demo();
function demo(){
    let a= 100;
    var b = 200;
    const c = 300;
    console.log(a , b, c);
    // console.log(x , y , z); 
}
demo();
console.log(a , b, c);
// console.log(y , z);

//Immediate invoke function
(function(){
        console.log('hi');
        
})();

