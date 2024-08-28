let wordsArr = ['Java','Javascript','Python','React'];
     for(let i =0;i<wordsArr.length;i++ ){
        
        document.getElementById('word').innerHTML=wordsArr[i];
        let word = (document.getElementById('answer').innerHTML.value);
        console.log(wordsArr[i]);
        console.log(word);
        // let word = prompt("enter the similar word");
        if(wordsArr[i] == word ){
           
        }
    }