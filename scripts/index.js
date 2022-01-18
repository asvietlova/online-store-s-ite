const curency_mapping = {
    "UAH": "грн.",
    "RUB": "р.",
    "USD": "$",
    "EUR": "€",
}

function curencyExchange(price, currencyType) {
    if (currencyType === CURRENCY) {
        return price;
    }
    return price * CURRENCY_EXCHANGE[currencyType];
}

const curencySymbol = curency_mapping[CURRENCY];
console.log(curencySymbol)

let elements =  document.getElementsByClassName("currency-symbol");
for (let item of elements) {
    item.innerText  = curencySymbol;
}


// const typeToClassMapping = {
//     "new": "new-items-slider-label",
//     "recommended": "new-items-slider-label-like",
//     "sale": "new-items-slider-label-percent",
// }

// let startItemIdx = 0;

// function updateNewItems() {
//     let currentInx = startItemIdx;
//     let newItemsHTML = document.querySelectorAll(".new-items-slider .slider-item");
//     for (let itemHTML of newItemsHTML) {
//         if (currentInx < ITEMS.length) {
            
//             let itemJS = ITEMS[currentInx];
//             if (itemJS.type !== "new") {
//                currentInx++;
//                continue
//            }
    
//             let imgItemHTML = itemHTML.querySelector(".new-items-slider-img");
//             imgItemHTML.src = itemJS.img;
           
//             let descriptionHTML = itemHTML.querySelector(".new-items-slider-name");
//             descriptionHTML.innerText = itemJS.description;
           
//             let currPriceHTML = itemHTML.querySelector(".current-price");
//             currPriceHTML.innerText = curencyExchange(itemJS.price, itemJS.currency);
    
//             currentInx++;
//         }
//     }
// }

// let navRowLeft = document.querySelector(".new-items-slider img:first-child");
// navRowLeft.onclick = () => {
//     if (startItemIdx > 0) {
//         startItemIdx--;
//         updateNewItems();
//     }
// }

// let navRowLeft = document.querySelector(".new-items-slider img:last-child");
// navRowLeft.onclick = () => {
//     let maxCurrentLenght =  4;
//     if (startItemIdx + maxCurrentLenght + 1 < ITEMS.length ) {
//         startItemIdx++;
//         updateNewItems();
//     }
// }
// // new-items-slider 