class Student{
    marks = 10;
    constructor(arr){

    //    this.marks= 20;
    console.log(arr);    
    // this.display=()=> {
    //     console.log(marks);   
    // }
    }
}
let arr= [1 ,2 , 3, 4];
let s = new Student(arr);

// let s = {
//     name:'peter',
//     designation:'spider man',
//     color:'orange',
//     show:function(){
//         console.log('inside the show function',this);
//     }
// }

function colors(name , types){
    this.name = name;
    this.types = types;
    this.display = function(){
        console.log(`the color name is ${this.name} and the color type is ${this.types}`)
    }
}
const c1 = new colors('red' , 'oil paint');
c1.display();

// for of loop

const contries = ['india', 'austrilia','south africa' ,'srilanka'];

for(let value of contries){
    console.log(value);
}
// for in loop 
const employees = {

    ename:'peter',
    eid:12,
    eDesignation:'CEO'
}
for (const eData in employees){
    console.log(`${eData}: ${employees[eData]}`);
    
}