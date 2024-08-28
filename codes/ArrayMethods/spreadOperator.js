//spread operator
let arr1 = [1 ,2 ,3 ,4 , 5 ,6];
let [a , b , ...c] = arr1;
console.log(a +"\n"+ b+"\n"+ c);

//rest operator

function show(a , ...args){
    console.log(a);
    
    console.log(args);   
}

show(1 , 2, 3, 4, 5);