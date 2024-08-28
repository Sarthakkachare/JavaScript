window.onload = function () { 
    var seconds =0;
     var milliseconds =0;
      varappendmilliseconds = document.getElementById("milliseconds"); 
      varappendSeconds = document.getElementById("seconds"); 
      varbuttonStart = document.getElementById('button-start');
       varbuttonStop = document.getElementById('button-stop');
        varbuttonReset = document.getElementById('button-reset'); 
        varInterval; 
        buttonStart.onclick = function () { 
            clearInterval(Interval); 
            Interval = setInterval(startTimer, 10); 
        }
        buttonStop.onclick = function () {
             clearInterval(Interval); 
            }
            buttonReset.onclick = function () { 
                clearInterval(Interval); 
                milliseconds = "00";
                 seconds = "00";
                  appendmilliseconds.innerHTML = milliseconds;
                   appendSeconds.innerHTML = seconds; 
                }
            
                function startTimer() {
                     milliseconds++; 
                     if (milliseconds <= 9) {
                         appendmilliseconds.innerHTML = "0" + milliseconds; 
                        }
                        if(milliseconds >9){
                            appendmilliseconds.innerHTML = milliseconds;
                        }
                        if(milliseconds >99) {
                            seconds++;
                            appendSeconds.innerHTML ="0"+ seconds;
                            milliseconds =0;
                            appendmilliseconds.innerHTML ="0"+0;
                        }
                        if(seconds >9){
                            appendSeconds.innerHTML = seconds;

                        }
                    }
                }
            
