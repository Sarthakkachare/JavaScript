//passing argument as a function to another function 

function demo (funct){
    console.log('demo');
    funct();

}

function f1(){
    console.log('function 1');
    
}
function f2(){
    console.log('function 2');
}

demo(f1);
demo(f2);