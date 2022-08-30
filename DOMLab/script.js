var menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '#', subLinks: [
      {text: 'all', href: '/catalog/all'},
      {text: 'top selling', href: '/catalog/top'},
      {text: 'search', href: '/catalog/search'},
    ]},
    {text: 'orders', href: '#' , subLinks: [
      {text: 'new', href: '/orders/new'},
      {text: 'pending', href: '/orders/pending'},
      {text: 'history', href: '/orders/history'},
    ]},
    {text: 'account', href: '#', subLinks: [
      {text: 'profile', href: '/account/profile'},
      {text: 'sign out', href: '/account/signout'},
    ]},
  ];


let mainEl = document.querySelector("main");


mainEl.style.backgroundColor = "var(--main-bg)";
mainEl.innerHTML = '<h1> SEI ROCKS! </h1>';
mainEl.setAttribute('class', 'flex-ctr');
// mainEl.style.height = '200%'; - Rasheem was here...

let topMenuEL = document.querySelector("#top-menu");


topMenuEL.style.height = '100%';
topMenuEL.style.backgroundColor = 'var(--top-menu-bg)';
topMenuEL.setAttribute('class', 'flex-around');

for (i = 0 ; i < menuLinks.length; i++){
 topMenuEL = document.querySelector("#top-menu");
 let newElement = document.createElement('a');
 newElement.setAttribute('href', menuLinks[i].href);
 newElement.innerText = menuLinks[i].text;
 topMenuEL.appendChild(newElement);
}

let subMenuEl = document.querySelector("#sub-menu");
subMenuEl.style.height = "100%";
subMenuEl.style.backgroundColor = "var(--main-bg)";
subMenuEl.setAttribute('class', 'flex-around');
subMenuEl.style.position = "absolute";
subMenuEl.style.top = "0";

let topMenuLinks = topMenuEL.getElementsByTagName("a");
let showingSubMenu = false;

topMenuEL.addEventListener('click', function(event) {
    event.preventDefault()

    console.log(event.target.tagName);

    if (event.target.classList.contains("active")) {
        event.target.classList.remove("active");
        showingSubMenu = false;
        subMenuEl.style.top = "0";
        console.log("Yooo")
        return;
    }
    // for(let i in topMenuLInks) {
    //     topMenuLinks[i].classList.add("active")
    //     console.log(topMenuLinks[i]);
    // }

    for(let index = 0; index < topMenuLinks.length; index++) {
        topMenuLinks[index].classList.remove("active");
        console.log(topMenuLinks[index]);
    }
    event.target.classList.add("active");
    if(event.target.text != "about") {
        showingSubMenu = true;
    } else {
        showingSubMenu = false;
    }

    if(showingSubMenu == "true") {
        buildSubMenu(event.target.subLinks);
        subMenuEl.style.top = "100%";
    } else {
        subMenuEl.style.top = "0";
    }
    return event.target.tagName == 'A';
});

function buildSubMenu(menus) {
    subMenuEl.innHTML = "";
    for (let link of menus) {
        let newSubLink = document.createElement("a");
        newSubLink.setAttribute("href", link.href);
        newSubLink.innerText - link.text;
        subMenuEl.appendChild(newSublink);
    }
}

