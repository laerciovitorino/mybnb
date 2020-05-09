// Code to manage the whole functionality and logic behind the behavior seen in the template

const ul = document.getElementById('rooms');
const url= 'https://api.sheety.co/30b6e400-9023-4a15-8e6c-16aa4e3b1e72';
let container = document.getElementById('rooms');
let content = '';

createNode = (element) => {
  return document.createElement(element);
}

append = (parent, element) => {
  return parent.appendChild(element);
}

fetch(url)
.then((response) => response.json())
.then((data) => {
  data.forEach((room, index) => {
    if (index % 3 === 0) {
      let li = createNode('li'),
          row = createNode('div'),
          column = createNode('div'),
          card = createNode('div'),
          cardDeck = createNode('div');
      
      cardDeck.innerHTML = `
        <div class="card-deck">
          <div class="card" style="width: 18rem;">
            <img src="${data[index].photo}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${data[index].name}</h5>
              <p class="card-text">${data[index].price}</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
          <div class="card" style="width: 18rem;">
            <img src="${data[index + 1].photo}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${data[index + 1].name}</h5>
              <p class="card-text">${data[index + 1].price}</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
          <div class="card" style="width: 18rem;">
            <img src="${data[index + 2].photo}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${data[index + 2].name}</h5>
              <p class="card-text">${data[index + 2].price}</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
      `;

      append(li, cardDeck);
      append(ul, li);
    }
  });
})
.catch((error) => {

});