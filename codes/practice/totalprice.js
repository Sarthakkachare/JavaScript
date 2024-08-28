let item1 = 30;
let item2 = 40;
let item3 = 50;
let item4 = 35;
let item5 = 55;

let totalPrice = null;
let discount=100;
let discountrate = 0.10;

for(let i = 0;i<=5;i++){
    if(i == 1){
        totalPrice+=item1;
    }else if(i == 2){
        totalPrice+=item2;
    }else if(i == 3){
        totalPrice+=item3;
    }else if(i == 4){
        totalPrice+=item4;
    }else{
        totalPrice+=item5;
    }
}

console.log("total price",totalPrice);

if(discount<totalPrice){
    const discountprice = totalPrice*discountrate;
    const priceTopay = totalPrice-discountprice;
    console.log("total discount",discountprice);

    console.log("you have to pay rs",priceTopay);
}
