let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`
];

document.addEventListener("DOMContentLoaded", function(event) {
  // Random quote of the day generator
  const randomQuote = function() {
    document.querySelector('#quote-of-the-day').textContent = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
  };
  randomQuote();
  
  // Do all of your work inside the document.addEventListener  

  // Part 1
    const main = document.getElementById('main-title');
    main.innerHTML = 'Something shorter!';

  // Part 2
 let body = document.getElementsByTagName('body');
 document.body.style.backgroundColor = "salmon";

  // Part 3
    let favs = document.getElementById('favorite-things').getElementsByTagName('li');
    let last = favs[favs.length - 1];
    last.remove();
  

  // Part 4
  
let specialTitle = document.getElementsByClassName('special-title');

for (let index = 0; index < specialTitle.length; index++) {
  specialTitle[index].style.fontSize = "2em";
}
  // Part 5

  let chi = document.querySelectorAll('#past-races li');
  for (let index = 0; index < chi.length; index++) {
    if (chi[index].textContent === 'Chicago') {
      chi[index].remove();
    }
  }
  // Part 6
  let liNew = document.createElement('li');
  liNew.innerText = "Pittsburgh";
  let pastR = document.getElementById('past-races');
  pastR.appendChild(liNew);

  // Part 7
let newBlog = document.createElement('div');
let newP = document.createElement('p');
let newH1 = document.createElement('h1');
newBlog.classList.add('blog-post', 'purple');
newH1.innerText = "Pittsbugh";
newBlog.appendChild(newH1);
newBlog.appendChild(newP);
newP.innerText = 'I live in Pittsburgh!';
let inMain = document.getElementsByClassName("main");
inMain[0].appendChild(newBlog);



  // Part 8


  // Part 9




});
