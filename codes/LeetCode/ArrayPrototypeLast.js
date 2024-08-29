/**
 * @return {null|boolean|number|string|Array|Object}
 */


Array.prototype.last = function() { 
   let n = this.length;
   console.log(this);
   
   
    if(n>0)
        return this[n-1];

    return -1;
}

const arr = [];
arr.last()