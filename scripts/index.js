const curency_mapping = {
    "UAH": "грн.",
    "RUB": "р.",
    "USD": "$",
    "EUR": "€",
}

const DEFAULT_NO_IMG = "./img/no-image.jpg"

function curencyExchange(price, currencyType) {
 let roundPrice = (number) => {
        return +number.toFixed(2);
    }

    if (currencyType === CURRENCY) {
        return price;
    }
    return roundPrice(price * CURRENCY_EXCHANGE[currencyType]);
}

const curencySymbol = curency_mapping[CURRENCY];
console.log(curencySymbol)

let elements =  document.getElementsByClassName("currency-symbol");
for (let item of elements) {
    item.innerText  = curencySymbol;
}


const NewItems = []
const RecommendedItems = []
const SaleItems = []

for (let item of ITEMS) {
    switch (item.type) {
        case "new":
            NewItems.push(item);
            break;

        case "sale":
            SaleItems.push(item);
            break;

        case "recommended":
            RecommendedItems.push(item);
            break;

        default:
            console.log("Unknown item type", item.type);
            break;
    }
}

console.log("NewItems lenght=", NewItems.length);

console.log("RecommendedItems lenght=", RecommendedItems.length);

console.log("SaleItems lenght=", SaleItems.length);


// TODO: change to 0 
let startNewItemIdx = 1;
let startRecomendedItemIdx = 1;
let startSaleItemIdx = 1;


function updateItems(itemsHTML, itemsArray, startIdx) {
    let currentInx = startIdx;

    for (let itemHTML of itemsHTML) {
        if (currentInx < itemsArray.length) {
            let itemJS = itemsArray[currentInx];
    
            let imgItemHTML = itemHTML.querySelector(".new-items-slider-img");
            if (itemJS.img != undefined && itemJS.img != "") {
                imgItemHTML.src = itemJS.img;
            } else { 
                imgItemHTML.src = DEFAULT_NO_IMG;
            }
           
            let descriptionHTML = itemHTML.querySelector(".new-items-slider-name");
            descriptionHTML.innerText = itemJS.description;
            // 
            if (itemJS.url != undefined && itemJS.url !== "") {
                descriptionHTML.href = itemJS.url;
            } else {
                descriptionHTML.href = "#";
            }
           
            let currPriceHTML = itemHTML.querySelector(".current-price");
            currPriceHTML.innerText = curencyExchange(itemJS.price, itemJS.currency);
    
            let oldPrice = itemHTML.querySelector(".old-price-holder .previous-price");
            let oldPriceCurrency = itemHTML.querySelector(".old-price-holder .currency-symbol");

            if (itemJS.oldPrice != undefined && itemJS.oldPrice != "") {
                oldPrice.innerText = curencyExchange(itemJS.oldPrice, itemJS.currency);
                oldPriceCurrency.innerText = curencySymbol;
            } else {
                oldPrice.innerText = ""
                oldPriceCurrency.innerText = ""
            }
            currentInx++;
        }
    }
}

// TODO:
// 
let newItemsHTML = document.querySelectorAll(".new-items-slider .slider-item");
updateItems(newItemsHTML, NewItems, startNewItemIdx); // Initial initialization


let recomendedItemsHTML = document.querySelectorAll(".recommended-items-slider .slider-item");
updateItems(recomendedItemsHTML, RecommendedItems, startRecomendedItemIdx); // Initial initialization


let saleItemsHTML = document.querySelectorAll(".sale-items-slider .slider-item");
updateItems(saleItemsHTML, SaleItems, startSaleItemIdx); // Initial initialization
// 



//// NEW ITEMS /////
document.querySelector(".new-items-slider .left-button-slider").onclick = () => {
    if (startNewItemIdx > 0) {
        startNewItemIdx--;
        let newItemsHTML = document.querySelectorAll(".new-items-slider .slider-item");
        updateItems(newItemsHTML, NewItems, startNewItemIdx);
    } else {
       // this.src =  ""
    }
}

document.querySelector(".new-items-slider .right-button-slider").onclick = () => {
    let maxCurrentLenght =  document.querySelectorAll('.new-items-slider .slider-item:not([style="display: none"])').length;

    if (startNewItemIdx + maxCurrentLenght < NewItems.length ) {
        startNewItemIdx++;
        let newItemsHTML = document.querySelectorAll(".new-items-slider .slider-item");
        updateItems(newItemsHTML,NewItems, startNewItemIdx);
    } else {

    }
}
// ////////////////////////////////

document.querySelector(".recommended-items-slider .left-button-slider").onclick = () => {
    if (startRecomendedItemIdx > 0) {
        startRecomendedItemIdx--;
        let recomendedItemsHTML = document.querySelectorAll(".recommended-items-slider .slider-item");
        updateItems(recomendedItemsHTML, RecommendedItems, startRecomendedItemIdx);
    } else {
       // this.src =  ""
    }
}

document.querySelector(".recommended-items-slider .right-button-slider").onclick = () => {
    let maxCurrentLenght =  document.querySelectorAll('.recommended-items-slider .slider-item:not([style="display: none"])').length;

    if (startRecomendedItemIdx + maxCurrentLenght < RecommendedItems.length ) {
        startRecomendedItemIdx++;
        let RecommendedItemsHTML = document.querySelectorAll(".recommended-items-slider .slider-item");
        updateItems(RecommendedItemsHTML,RecommendedItems, startRecomendedItemIdx);
    } else {

    }
}

document.querySelector(".sale-items-slider .left-button-slider").onclick = () => {
    if (startSaleItemIdx > 0) {
        startSaleItemIdx--;
        let saleItemsHTML = document.querySelectorAll(".sale-items-slider .slider-item");
        updateItems(saleItemsHTML, SaleItems, startSaleItemIdx);
    } else {
       // this.src =  ""
    }
}

document.querySelector(".sale-items-slider .right-button-slider").onclick = () => {
    let maxCurrentLenght =  document.querySelectorAll('.sale-items-slider .slider-item:not([style="display: none"])').length;

    if (startSaleItemIdx + maxCurrentLenght < SaleItems.length ) {
        startSaleItemIdx++;
        let SaleItemsHTML = document.querySelectorAll(".sale-items-slider .slider-item");
        updateItems(SaleItemsHTML,SaleItems, startSaleItemIdx);
    } else {

    }
}