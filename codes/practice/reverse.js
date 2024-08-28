// let arr = [1 ,2 ,3 ,4, 5];
// let start = 0;
// let end = arr.length-1;
// console.log(arr);

//     while(start < end){
//         let temp = arr[start];
//         arr[start] = arr[end];
//         arr[end] = temp;
//         start++;
//         end--;
//     }
// console.log(arr);

// let str = 'sarthak';

// let arr = str.split('');
// console.log(arr);


// let start = 0;
// let end = arr.length-1;
// console.log(arr);

//     while(start < end){
//         let temp = arr[start];
//         arr[start] = arr[end];
//         arr[end] = temp;
//         start++;
//         end--;
//     }
// console.log(arr);

let str = 'siris';

let start = 0;
let end = str.length-1;

while(start < end){

    if(str[start] == str[end]){
        flag = 0;
    }else{
        flag = 1
        break;     
    }
    start++;
    end--;
}
if(flag == 0)
    console.log(`${str} is palindrom`);
else{
    console.log(`${str} is not palindrome`);
    
}
    