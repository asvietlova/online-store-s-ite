let navUlHTML = document.querySelector(".nav-container ul")

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

//function getSubmenu(el.submenu) {
    for (let el of arrTopMenu) {
        if (el.hasOwnProperty('submenu')) {
            console.log('true');
            let sortedSubmenu = el.submenu.sort(compare);
            console.log(sortedSubmenu);

            let ul = document.createElement("ul");
            let li = document.createElement("li");
            let a = document.createElement("a");

            a.innerText = sortedSubmenu.title;
            if (sortedSubmenu.url != undefined && sortedSubmenu.url != "") {
                a.href = sortedSubmenu.url;
            } else {
            a.href = "#";
            }

            a.classList.add('visible-desctop', 'submenu-item-a');
            li.appendChild(a);
            li.classList.add('visible-desctop', 'submenu-item');
            ul.appendChild(li);
            ul.classList.add('visible-desctop', 'submenu');
        } else {
        console.log('false')
        };
    };
// };

//пишу фунцию присоединения
// function getSubmenu(submenu) {
//     // sort submenu 
//     let ul = document.createElement("ul");
// NewItems.sort(function (a, b) {
//     if (a.date < b.date) {
//       return 1;
//     }
//     if (a.date > b.date) {
//       return -1;
//     }
//         return 0;
//   });
//   console.log(NewItems);
//     for (let subItem of submenu) {
//        let li  document.createElement("li");
//        li.title = ''
//        div.append(li)
//     }

//     ul.class = "";
//     // position absolute 
//     // z-index = 1000;
//     // invisible 
// }


for (let elem of arrTopMenu) {
    let li = document.createElement("li");
    let a = document.createElement("a");
    a.innerText = elem.title;
    if (elem.url != undefined && elem.url != "") {
        a.href = elem.url;
    } else {
        a.href = "#";
    }

    a.classList.add('visible-desctop');
    li.appendChild(a);
    
    
    if (elem.submenu != undefined && elem.submenu != "") {
        let img = document.createElement("img");
        img.src = "./img/vectors/Vector1.svg";
        img.classList.add('visible-desctop');
        li.append(img);

//       когда навожу становится видимым mouseover/mouseout,
//  let submenu = getSubmenu(elem.submenu);
// // dropdown 
//         li.hover = (event) {
//             submenu.visible 
//             submenu.x y = evet.x y
        };
    li.classList.add('visible-desctop');
    navUlHTML.append(li);
    };


