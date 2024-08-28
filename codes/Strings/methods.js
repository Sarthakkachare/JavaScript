let message = "sarthak";

console.log(message.length);
console.log(message.substring(1,4));//substring(start , end)include start exclude end we cannot give negative value

console.log(message.slice(1,4));//slice(start , end)include start exclude end
console.log(message.slice(-7,-2));//staart from last  we can give the nigative value


console.log("---------------------------------------");
let spaceString = "    sart  hak        ";
console.log(spaceString.length);
console.log(spaceString.trim().length);
console.log(spaceString.split(" ").join("").length);//trim between the space 

let newstr = spaceString.split(" ").join("");
console.log(newstr);



 