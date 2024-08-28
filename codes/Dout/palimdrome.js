let str = "malayalam";
let carr = str.split("");
let j = carr.length - 1;
console.log(carr.length);
let flag = 0;
for (let i = 0; i <(carr.length-1)/2; i++) {
        if (carr[i] != carr[j]) {
            flag = 0;
            console.log("string is  not palindrome");
            break;
        } else {
            flag = 1;
        }
        j--;   
}

if (flag == 1) {
    console.log("string is palindrome");
}