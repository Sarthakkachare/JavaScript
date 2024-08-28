let name = 'sarthak';
let course = 'mern stack';

//function constructor

function ObjectFun(name , course){
    console.log(this.name);
    console.log(this.course);
    name = name;//we cannot access out side the function
    this.course=course;//we can use the outside the function with help of the object 
    this.display=function(){
        console.log("in function");
    }
    console.log('---------------------');
    console.log(this.name);
    console.log(this.course);
}

let obj = new ObjectFun('abhishek','ediko');
obj.display();

console.log(obj.name);
console.log(obj.course);