let bt1 = document.getElementsByClassName("fa-plus-circle")
let buttonsPlus = Array.from(bt1)

for(let btnplus of buttonsPlus){
    btnplus.addEventListener("click" , function(){
        btnplus.nextElementSibling.innerHTML++;
        sum()
    })
}

let bt2 = document.getElementsByClassName("fa-minus-circle")
let buttonsMinus = Array.from(bt2)


for(let btnminus of buttonsMinus){
    btnminus.addEventListener("click" , function(){
        if(btnminus.previousElementSibling.innerHTML > 0){
            btnminus.previousElementSibling.innerHTML--
            sum()
        }
    })
}

function sum(){
    let qty = document.querySelectorAll(".qty");
    let price = document.querySelectorAll(".price");
    let sum = 0 ;
    for(let i = 0 ; i < qty.length ; i++){
        sum += qty[i].innerHTML * price[i].innerHTML ;       
    }
    document.getElementById("totalPrice").innerHTML = "Shooping Bag Total : $ " +sum;

}

let buttonsDelete = document.getElementsByClassName("fa-trash");
console.log(buttonsDelete)

for(let btndelete of buttonsDelete){
    btndelete.addEventListener("click" , function(){
        btndelete.parentNode.remove();
        sum();
    })
}

let hearts = document.querySelectorAll(".fa-heart")

for(let heart of hearts){
    heart.addEventListener("click",function(){
        heart.classList.toggle("red")
    })
}

let orderButton = document.getElementsByClassName("btnOrder");

for(let order of orderButton){
    order.addEventListener("click",function(){
        alert("Thank you for purchasing with us")
    })
}