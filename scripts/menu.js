let navUlHTML = document.querySelector(".nav-container-ul")

let arrTopMenu = [];
for (let propName in TOP_MENU) {
    arrTopMenu.push(TOP_MENU[propName]);
}

function compare(a, b) {
    if (a.order < b.order) return  -1;
    else if ( a.order > b.order ) return 1;

    return 0;
}

arrTopMenu.sort(compare);
console.log(arrTopMenu);

// let x = TOP_MENU.catalog.submenu;
// console.log(x);

function getSubmenu(submenuList) {
    let sortedSubmenu = submenuList.sort(compare);

    let ul = document.createElement("ul");
    ul.classList.add('visible-desctop', 'submenu');

    for (let submenuItem of sortedSubmenu) {
        let li = document.createElement("li");
        li.classList.add('visible-desctop', 'submenu-item');

        let a = document.createElement("a");
        a.classList.add('visible-desctop', 'submenu-item-a');

        a.innerText = submenuItem.title;
        a.href = submenuItem.url !== "" ?  submenuItem.url   : "#";

        li.appendChild(a);
        ul.appendChild(li);
    }
    return ul;
}



for (let elem of arrTopMenu) {
    let li = document.createElement("li");
    let a = document.createElement("a");
    a.innerText = elem.title;
    if (elem.url != undefined && elem.url != "") {
        a.href = elem.url;
    } else {
        a.href = "#";
    }

    a.classList.add('visible-desctop', 'nav-container-ul-a');
    li.appendChild(a);
    
    
    if (elem.submenu != undefined && elem.submenu != "") {
        let img = document.createElement("img");
        img.src = "./img/vectors/Vector1.svg";
        img.classList.add('visible-desctop');
        li.append(img);

        let sybmenuHTML = getSubmenu(elem.submenu);
        li.append(sybmenuHTML);

        sybmenuHTML.addEventListener("mouseover", function(event) {
          //  console.log(event);
         //  console.log(li);
            this.style.display = "block";
            event.stopPropagation();
        });
        sybmenuHTML.addEventListener("mouseout", function(event) {
            this.style.display = "none";
            event.stopPropagation();
        });

        li.addEventListener("mouseover", function(event) {
          //  console.log(event);
         //  console.log(li);

            sybmenuHTML.style.top = event.clientY + "px";
            sybmenuHTML.style.left = event.clientX - 150 + "px";
            sybmenuHTML.style.display = "block";
            event.stopPropagation();
        });
        li.addEventListener("mouseout", function(event) {
            sybmenuHTML.style.display = "none";
            event.stopPropagation();
        });


        };
    li.classList.add('visible-desctop', 'nav-container-ul-li');
    navUlHTML.append(li);
    };


