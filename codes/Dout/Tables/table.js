function generateTables() {

    let num = document.getElementById('number').value;
    // const div = document.createElement('div');
    let cont = document.getElementById('cont');
    for(let i = 1;i<=10;i++){
        // document.getElementById('tables').innerHTML=`${num} * ${i} = ${num * i}`;
        const div = document.createElement('div');
        div.innerHTML = `${num} * ${i} = ${num * i} <br>`;
        cont.appendChild(div);
        div.style.backgroundColor='grey';
        // document.write(`${num} * ${i} = ${num * i} <br>`);
    }
    
}
