let demo ={
    name : "sarthak",
    arr:[10 , 20 , 30],
    obj:{
        name :"underObj",
        arr:[100,200,300],
        userobjdisplay:function(){
            console.log(demo.obj.name);
            console.log(demo.arr[0]);
        }
    },
    display:function(){
        console.log(demo.name);
        console.log(this.arr);
    }
}

demo.display();
demo.obj.userobjdisplay();
