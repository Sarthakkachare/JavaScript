let arr = [1 ,2 , 3, 4, 5,6];

let mid = Math.floor((arr.length)/2);

//even elements
if(arr.length % 2 == 0){
    console.log(arr[mid-1]);
}else{
    //odd elements
    console.log(arr[mid]);   
}
