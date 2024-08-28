// let str = 'hello how are you? he hoe hoo hey how';

// let pattern1 = /ho/g;
// let result1 = str.match(pattern1);
// console.log(result1);//[ 'ho', 'ho', 'ho', 'ho' ]

// let pattern2 = /ho+/g;//ho is required 
// let result2 = str.match(pattern2);
// console.log(result2);//[ 'ho', 'ho', 'hoo', 'ho' ]

// let pattern3 = /ho*/g;//h is required 
// let result3 = str.match(pattern3);
// console.log(result3);//['h', 'ho','h',   'ho','hoo', 'h','ho']

//-----------------------------------------------

// let demo = '1 , 10 , 100 , 1000';

// let pattern = /100?/g;//min 10 and max 100

// let result = demo.match(pattern);
// console.log(result);
//-------------------------------------------------
//{min , max}
// let demo = '1 , 10 , 100 , 10000';

// let pattern = /\d{2,3}/g;//min 1 digit and max 3 digit

// let result = demo.match(pattern);
// console.log(result);

