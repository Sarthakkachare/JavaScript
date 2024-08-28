let a = 9;
async function show1(){
    let b = await 100000000000;
    console.log('show function',b);
}
function show2(){
    let b =  10;
    console.log('show function',b);
}

console.log('hello');
show1();
show2();
console.log("end");

// <script>
//         fetch("https://api.npoint.io/9045c260b1565daa9e15")
//         // fetch("https://docs.google.com/spreadsheets/d/1eTwIycmS5zKqjGeOZC6Rs4K7E-bf5TF_zMka1oNtcgs/edit?gid=0#gid=0")
//         .then((res)=>res.json())
//         .then((data)=>console.log(data))
//         .catch((e)=>console.log(e))
//     </script>