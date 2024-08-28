let str = "Sarthak";
let newStr ="";
for (let i = str.length-1; i>= 0; i--) {
    // if (i < j) {
    //     let temp = st[i];
    //     st[i] = st[j];
    //     st[j] = temp;
    // }
    // j--;
    // console.log(st); 
    newStr+=str[i]
}
console.log(newStr);