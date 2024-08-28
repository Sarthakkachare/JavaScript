var promice = new Promise(function(resolve , reject){

    let x = 'sarthak';
    var y = 'sarthak';
    if(x === y){
        consoleeeee.log('as');
        resolve('hi');
        
        
    }else{
        reject('bye');
    }
});

promice.then(function(result){
    console.log("sucess",result);
},function(){
    console.log('rejected');
    throw Exception('');
    
}).catch(function(error){
    console.log("error++",error);
    
})