let animal ={
    name:'lion',
    color:'yellow'
}
let bird={
    name:'parrot',
    color:'green'
}

function print(){
    console.log(this.name +" "+this.color);
}

let print_animal = print.bind(animal);
let print_bird = print.bind(bird);
// print_animal();
// console.log(print_animal == animal);
// console.log(print_bird.name);