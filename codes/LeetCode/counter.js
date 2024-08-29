/*
/**
 * @param {number} n
 * @return {Function} counter
var createCounter = function(n) {
    
    return function() {
        
    };
}; 
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */

/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function(n) {
    // console.log(createCounter);
    let count = 0;
    let arr = new Array();
    // arr.push(n);
    return function() {
        arr.push(n);
        count++;
        n = n + count;
        
        console.log(arr);
        
    };
};
 
  const counter = createCounter(10)
  counter() // 10
  counter() // 11
  console.log(counter()) // 12
  
 
