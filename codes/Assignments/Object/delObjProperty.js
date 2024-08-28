let student ={
    name : 'sarthak',
    id:1,
    field:'E&TC',
    class:'Passout',
    marks:8.5
};
alert(JSON.stringify(student ,null,1));

let delid = delete student.id;
let delclass = delete student.class;

alert(JSON.stringify(student ,null,1));