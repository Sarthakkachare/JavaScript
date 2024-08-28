let str = `My Name Is Sarthak Sandip Kachare
my father Name is sandip kachare
my mother name is madhuri kachare
my brother name is shubham kachare`;

//i g m are the attributes or modifiers
// g gives elements in array 
let result1 = str.match(/^My/igm);//i - case sensitive , g - global  , m - multi line , ^ - start with my
console.log(result1);
let result2 = str.match(/[^my]/igm);// [] - individual letter ,[^my] - dont show my reaming show all letteers
console.log(result2);

let pattern = /sarthak/i;
let match = str.match(pattern);
console.log(match);

let test = pattern.test(str);
console.log(test);

let exec = pattern.exec(str);

console.log(exec);


//\w --> a-z A-Z _ 0-9

// let text = 'give_067!@#$%^&*';

// let pat1 = /\w/g;

// let pat2 = /\W/g;

// let res1 = text.match(pat1);
// let res2 = text.match(pat2);
// console.log(res1);
// console.log(res2);

let text = 'give_067!@#$%^&*';

//
let pat1 = /\D/g;//ignore the digits

let pat2 = /\d/g;//give only digit

let res1 = text.match(pat1);
let res2 = text.match(pat2);
console.log(res1);
console.log(res2);
