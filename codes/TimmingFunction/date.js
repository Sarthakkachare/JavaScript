let d = new Date();
console.log(d.getDate());//9
console.log(d.getDay());//5
console.log(d.getTime());
console.log(d.getFullYear());//2024
console.log(d.getHours());//9
console.log(d.getMinutes());//35
console.log(d.getSeconds());//33
console.log(d.setFullYear(2024,1,8));


setInterval(()=>{
    let india = new Date().toLocaleString('en-us' ,
         {
            timeZone:'Asia/Kolkata',
            timeStyle:'medium',
            hourCycle:"h12"
        }); 
    // console.log(india);
    document.getElementById('indianTime').innerHTML=india;
    
},1000);

setInterval(()=>{
    let newYork = new Date().toLocaleString('en-us' ,
         {
            timeZone:'America/New_York',
            timeStyle:'medium',
            hourCycle:"h12"
        }); 
    // console.log(newYork);
    document.getElementById('newYorkTime').innerHTML=newYork;
    
},1000);

setInterval(()=>{
    let paris = new Date().toLocaleString('en-us' ,
         {
            timeZone:'Europe/Paris',
            timeStyle:'medium',
            hourCycle:"h12"
        }); 
    // console.log(paris);
    document.getElementById('parisTime').innerHTML=paris;
    
},1000);

setInterval(()=>{
    let canda = new Date().toLocaleString('en-us' ,
         {
            timeZone:'America/Vancouver',
            timeStyle:'medium',
            hourCycle:"h12"
        }); 
    // console.log(canda);
    document.getElementById('candaTime').innerHTML=canda;
    
},1000)