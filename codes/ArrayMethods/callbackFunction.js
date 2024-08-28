// let val = 0;
// function add(val){
//     val = val + 10;
//     console.log(val);
//     sub(val);
// }
// function sub(val){
//      val = val - 2;
//     console.log(val);
//     mul(val);
// }
// function mul(val){
//      val = val * 4;
//     console.log(val);
//     div(val);
// }
// function div(val){
//      val = val / 4;
//     console.log(val);
    
// }

// add(10);

adddition(5,function(addres){
    console.log(addres);
    // console.log(function);
    subtraction(addres , function(subres){
        console.log(subres);
        multipliaction(subres , function(mulres){
            console.log(mulres);
            console.log('this is mulres',mulres);
        })
    })
})
function adddition(val , callback){
    return callback(val+5);
}
function subtraction(val , callback){
    return callback(val-2);
}
function multipliaction(val , callback){
    return callback(val*5);
}
