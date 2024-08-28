/* 
Count the occurrences of each character in a given string.
*/
let str = "sarthak";

let carr = str.split("");

for(let i = 0;i<carr.length;i++){
    let temp = carr[i];
    let count = 0;
    for(let j = 0;j<carr.length;j++){
        if(carr[j] == temp){
            count++;
        }
    }
    console.log("count of "+carr[i]+ " is "+count);
}