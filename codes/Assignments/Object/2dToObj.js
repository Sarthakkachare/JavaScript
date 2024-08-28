let arr=[
    ['sarthak','sports'],
    ['abhishek','Utube'],
    ['vishal' ,'instagram'],
    ['amar','movie']
];


function displayData(arr){
    let obj ={};

    arr.forEach(element => {
        console.log(element);
        let key = element[0];
        let value = element[1];

        obj[key] = value;
    });
    return obj;
}

console.log(displayData(arr));