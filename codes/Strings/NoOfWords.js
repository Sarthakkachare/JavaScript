let statment = "My name is Sarthak sandip kachare";
let count = 0;
let i = 0;
while(i<statment.length){
    if(statment[i]== " "){
        count++;
    }
    i++;
}
console.log(`Number Of Words Are ${count+1}`);
