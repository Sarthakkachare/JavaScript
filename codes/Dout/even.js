let arr= [1,2,3,4,5];
max = 0;
console.log("even number from an array are:");
for(let i = 0;i<arr.length;i++){
    if(arr[i]%2 == 0){
        console.log(arr[i]);
    }
    if(arr[i]>max){
        max = arr[i];
    }
}
console.log("maximum number from array :"+max);

