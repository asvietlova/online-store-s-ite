const curency_mapping = {
    "UAH": "грн.",
    "RUB": "р.",
    "USD": "$",
    "EUR": "€",
};

const DEFAULT_NO_IMG = "./img/no-image.jpg";

function curencyExchange(price, currencyType) {
 let roundPrice = (number) => {
        return +number.toFixed(2);
        // return Math.trunc(number * 100) / 100;
    }
    if (currencyType === CURRENCY) {
        return price;
    }
    return roundPrice(price * CURRENCY_EXCHANGE[currencyType]);
};

const curencySymbol = curency_mapping[CURRENCY];
console.log(curencySymbol);

let elements =  document.getElementsByClassName("currency-symbol");
for (let item of elements) {
    item.innerText  = curencySymbol;
};

const NewItems = [];
const RecommendedItems = [];
const SaleItems = [];

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
    };
};



console.log("NewItems lenght=", NewItems.length);

console.log("RecommendedItems lenght=", RecommendedItems.length);

console.log("SaleItems lenght=", SaleItems.length);
 
NewItems.sort(function (a, b) {
    if (a.date < b.date) {
      return 1;
    }
    if (a.date > b.date) {
      return -1;
    }
        return 0;
  });
  console.log(NewItems);


  RecommendedItems.sort(function (a, b) {
    let priceA = curencyExchange(a.price, a.currency);
    let priceB = curencyExchange(b.price, b.currency);
    if (priceA > priceB) {
      return 1;
    }
    if (priceA < priceB) {
      return -1;
    }
        return 0;
  });
  console.log(RecommendedItems);

  SaleItems.sort(function (a, b) {
    let priceA = curencyExchange(a.price, a.currency);
    let oldPriceA = curencyExchange(a.oldPrice, a.currency);
    let priceB = curencyExchange(b.price, b.currency);
    let oldPriceB = curencyExchange(b.oldPrice, b.currency);
    if ((oldPriceA - priceA) < (oldPriceB - priceB)) {
      return 1;
    }
    if ((oldPriceA - priceA) > (oldPriceB - priceB)) {
      return -1;
    }
        return 0;
  });
  console.log(SaleItems)


function getNumberOfItems() {
    if (window.matchMedia("screen and (max-width: 749px)").matches) {
        return 1;
    } else if (window.matchMedia("screen and (min-width: 750px) and (max-width: 979px)").matches) {
        return 3;
    };
    return 4;
};


let startNewItemIdx = 0;
let startRecomendedItemIdx = 0;
let startSaleItemIdx = 0;

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
            };
           
            let descriptionHTML = itemHTML.querySelector(".new-items-slider-name");
            descriptionHTML.innerText = itemJS.description;
            // 
            if (itemJS.url != undefined && itemJS.url !== "") {
                descriptionHTML.href = itemJS.url;
            } else {
                descriptionHTML.href = "#";
            };
           
            let currPriceHTML = itemHTML.querySelector(".current-price");
            // currPriceHTML.innerText = curencyExchange(itemJS.price, itemJS.currency);
            if (itemJS.price != undefined && itemJS.price !== "") {
                currPriceHTML.innerText = curencyExchange(itemJS.price, itemJS.currency);
            } else {
                currPriceHTML.innerText = "Нет в наличии";
            }
    
            let oldPrice = itemHTML.querySelector(".old-price-holder .previous-price");
            let oldPriceCurrency = itemHTML.querySelector(".old-price-holder .currency-symbol");

            if (itemJS.oldPrice != undefined && itemJS.oldPrice != "") {
                oldPrice.innerText = curencyExchange(itemJS.oldPrice, itemJS.currency);
                oldPriceCurrency.innerText = curencySymbol;
            } else {
                oldPrice.innerText = ""
                oldPriceCurrency.innerText = ""
            };
            currentInx++;
        };
    };
};


let newItemsHTML = document.querySelectorAll(".new-items-slider .slider-item");
updateItems(newItemsHTML, NewItems, startNewItemIdx); // Initial initialization


let recomendedItemsHTML = document.querySelectorAll(".recommended-items-slider .slider-item");
updateItems(recomendedItemsHTML, RecommendedItems, startRecomendedItemIdx); // Initial initialization


let saleItemsHTML = document.querySelectorAll(".sale-items-slider .slider-item");
updateItems(saleItemsHTML, SaleItems, startSaleItemIdx); // Initial initialization
// 



//// NEW ITEMS /////
document.querySelector(".new-items-slider .left-button-slider").addEventListener("click", function () {
    if (startNewItemIdx > 0) {
        startNewItemIdx--;
        let newItemsHTML = document.querySelectorAll(".new-items-slider .slider-item");
        updateItems(newItemsHTML, NewItems, startNewItemIdx);}
        // let rightButt = document.querySelector(".new-items-slider .right-button-slider")
        // rightButt.style.visibility = "visible";
    // } else {
    //     this.style.visibility = "hidden"
    // }
    // if (getNumberOfItems() <= NewItems.length) {
    //     this.style.visibility = "hidden";
    // }
}
);

document.querySelector(".new-items-slider .right-button-slider").addEventListener("click", function () {
    let maxCurrentLenght =  getNumberOfItems();
console.log(maxCurrentLenght)
    if (startNewItemIdx + maxCurrentLenght < NewItems.length ) {
        startNewItemIdx++;
        let newItemsHTML = document.querySelectorAll(".new-items-slider .slider-item");
        updateItems(newItemsHTML,NewItems, startNewItemIdx);}

        // let leftButt = document.querySelector(".new-items-slider .left-button-slider")
        // leftButt.style.visibility = "visible";
    // } else {
    //     this.style.visibility = "hidden";
    // }
    // if (getNumberOfItems() <= NewItems.length) {
    //     this.style.visibility = "hidden";
    // }
});

document.querySelector(".button-slider-left").onclick = () => {
    if (startNewItemIdx > 0) {
        startNewItemIdx--;
        let newItemsHTML = document.querySelectorAll(".new-items-slider .slider-item");
        updateItems(newItemsHTML, NewItems, startNewItemIdx);
    }; 
};

document.querySelector(".button-slider-right").onclick = () => {
    let maxCurrentLenght = getNumberOfItems();
    console.log(maxCurrentLenght);
    if (startNewItemIdx + maxCurrentLenght < NewItems.length ) {
        startNewItemIdx++;
        let newItemsHTML = document.querySelectorAll(".new-items-slider .slider-item");
        updateItems(newItemsHTML,NewItems, startNewItemIdx);
    }; 
};
//// RECOMENDED /////

document.querySelector(".recommended-items-slider .left-button-slider").addEventListener("click", function () {
    if (startRecomendedItemIdx > 0) {
        startRecomendedItemIdx--;
        let recomendedItemsHTML = document.querySelectorAll(".recommended-items-slider .slider-item");
        updateItems(recomendedItemsHTML, RecommendedItems, startRecomendedItemIdx);
    }; 
    // if (getNumberOfItems() <= RecommendedItems.length) {
    //     this.style.visibility = "hidden";
    // }
    
});

document.querySelector(".recommended-items-slider .right-button-slider").onclick = () => {
    let maxCurrentLenght = getNumberOfItems();
    console.log(maxCurrentLenght);

    if (startRecomendedItemIdx + maxCurrentLenght < RecommendedItems.length ) {
        startRecomendedItemIdx++;
        let RecommendedItemsHTML = document.querySelectorAll(".recommended-items-slider .slider-item");
        updateItems(RecommendedItemsHTML,RecommendedItems, startRecomendedItemIdx);
    }; 
    // if (getNumberOfItems() <= RecommendedItems.length) {
    //     this.style.visibility = "hidden";
    // }
};

document.querySelector(".recomended-button-slider-left").onclick = () => {
    if (startRecomendedItemIdx > 0) {
        startRecomendedItemIdx--;
        let recomendedItemsHTML = document.querySelectorAll(".recommended-items-slider .slider-item");
        updateItems(recomendedItemsHTML, RecommendedItems, startRecomendedItemIdx);
    }; 
};

document.querySelector(".recomended-button-slider-right").onclick = () => {
    let maxCurrentLenght = getNumberOfItems();
    console.log(maxCurrentLenght);

    if (startRecomendedItemIdx + maxCurrentLenght < RecommendedItems.length ) {
        startRecomendedItemIdx++;
        let RecommendedItemsHTML = document.querySelectorAll(".recommended-items-slider .slider-item");
        updateItems(RecommendedItemsHTML,RecommendedItems, startRecomendedItemIdx);
    };    
};
//// SALE /////

document.querySelector(".sale-items-slider .left-button-slider").onclick = () => {
    if (startSaleItemIdx > 0) {
        startSaleItemIdx--;
        let saleItemsHTML = document.querySelectorAll(".sale-items-slider .slider-item");
        updateItems(saleItemsHTML, SaleItems, startSaleItemIdx);
    };
};

document.querySelector(".sale-items-slider .right-button-slider").onclick = () => {
    let maxCurrentLenght = getNumberOfItems();
    console.log(maxCurrentLenght);

    if (startSaleItemIdx + maxCurrentLenght < SaleItems.length ) {
        startSaleItemIdx++;
        let SaleItemsHTML = document.querySelectorAll(".sale-items-slider .slider-item");
        updateItems(SaleItemsHTML,SaleItems, startSaleItemIdx);
    };
};

document.querySelector(".sale-button-slider-left").onclick = () => {
    if (startSaleItemIdx > 0) {
        startSaleItemIdx--;
        let saleItemsHTML = document.querySelectorAll(".sale-items-slider .slider-item");
        updateItems(saleItemsHTML, SaleItems, startSaleItemIdx);
    } ;
};

document.querySelector(".sale-button-slider-right").onclick = () => {
    let maxCurrentLenght = getNumberOfItems();
    console.log(maxCurrentLenght)

    if (startSaleItemIdx + maxCurrentLenght < SaleItems.length ) {
        startSaleItemIdx++;
        let SaleItemsHTML = document.querySelectorAll(".sale-items-slider .slider-item");
        updateItems(SaleItemsHTML,SaleItems, startSaleItemIdx);
    
    };
};

