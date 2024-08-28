  let str = "madam";

let start = str[0];
let end = str[str.length-1];

var rev='';

for(let i = str.length-1;i>=0;i--){
    rev+=str[i];

    // console.log(str[i]);  
}
// console.log(rev);

if(rev == str){
    console.log("palindrome");
    
}else{
    console.log("not Palindrome");
    
}
// while(start < end){
//     let temp = str[start];
//     str[start] = str[end];
//     str[end] = temp;
//     start++;
//     end--;
// }
// console.log(str);


  