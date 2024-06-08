// let isPlaying = true;
// for(;isPlaying!=false;){
//     const action = prompt("enter");
//     if(action == 'quit'){
//         isPlaying=false;
//         console.log("thanks");
//     }
//     else{
//         console.log("continue");
//     }
// }

let correct = 5;
let guess = null;
while(guess!=correct){
    guess = prompt("enter the number 1-10");
    if(correct==guess){
        // console.log("You are correct");
        document.getElementById('demo').innerHTML="<h2>correct</h2>"
    }else{
        alert('try again')
        // console,log("you are wrong");
    }
        
}


