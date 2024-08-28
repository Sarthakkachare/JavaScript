let oldArray = [1, 2, 3, 4, 5];

console.log(oldArray);
//map returns the whole array after applying the condition
let mapArray = oldArray.map(
    function (element) {
        return element % 2 === 0;
    }
);
console.log(mapArray);

//filter the array and filter elements fill into the array and return it
let filterArray = oldArray.filter(
    function (element) {
        return element % 2 === 0;
    }
);
console.log(filterArray);
//applying condtion and give one return value 
let reduceArray = oldArray.reduce(
    function (element) {
        return element % 2 === 0;
    }
);

console.log(reduceArray);