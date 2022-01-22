let amountHTML = document.querySelector(".basket-amount");
let totalSumHTML = document.querySelector(".basket-total-sum");
// INITIALIZE

const ammountKey = "ammount";
const totalSumKey = "sum";

let ammount = localStorage.getItem(ammountKey);
let totalSum = localStorage.getItem(totalSumKey);

if (ammount == null || totalSum == null || ammount === "" || totalSum === "") {
    ammount = BASKET.elements;
    totalSum = BASKET.price;
}

ammount = Number(ammount);
totalSum = Number(totalSum);


amountHTML.innerText = ammount;
totalSumHTML.innerText = totalSum;

function updateBasket(summ) {
    ammount++;
    localStorage.setItem(ammountKey, ammount);
    amountHTML.innerText = ammount;
    totalSum += summ;
    localStorage.setItem(totalSumKey, totalSum);
    totalSumHTML.innerText = totalSum;
}



let ButtonsBuyHTML = document.querySelectorAll(".new-items-slider-button-buy");
for (let elem of ButtonsBuyHTML) {
    elem.addEventListener('click', function(event) {
       let currentPrice =  this.closest(".slider-item").querySelector(".current-price");
       console.log(currentPrice);
    //    if (currentPrice )
         updateBasket(Number(currentPrice.innerText));
    });
}