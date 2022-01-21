let numberOfItemsInBucket = BASKET.elements;
let sum = BASKET.price;
document.querySelector(".basket-amount").innerText = numberOfItemsInBucket;
document.querySelector(".basket-total-sum").innerText = sum;

// function plusFunction(numberOfItemsInBucket) {
//     return numberOfItemsInBucket++;
// }

// const buttonBuy = document.getElementsByClassName("new-items-slider-button-buy");
// buttonBuy.addEventListener('click', plusFunction(numberOfItemsInBucket));