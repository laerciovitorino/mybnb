// Code to manage the whole functionality and logic behind the behavior seen in the template

const ul = document.getElementById('rooms');
const url= 'https://api.sheety.co/30b6e400-9023-4a15-8e6c-16aa4e3b1e72';

createNode = (element) => {
  return document.createElement(element);
}

append = (parent, element) => {
  return parent.appendChild(element);
}

fetch(url)
.then((response) => response.json())
.then((data) => {
  let pages = [];
  for (let i = 0; i < 4; i++) {
    let page = [];
    for (let j = i * 6; j < (i + 1) * 6; j++) {
      page.push(data[j]);
    }
    pages.push(page);
  }

  data.forEach((room, index) => {
    if (index % 3 === 0) {
      let li = createNode('li'),
          cardDeck = createNode('div'),
          pagination = createNode('div');
      
      cardDeck.innerHTML = `
        <div class="card-deck">
          <div class="card" style="">
            <img src="${data[index].photo}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${data[index].name}</h5>
              <small>${data[index].property_type}</small>
            </div>
            <div class="card-footer">
              <p class="card-text">R$ ${data[index].price},00 / noite</p>
            </div>
          </div>
          <div class="card">
            <img src="${data[index + 1].photo}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${data[index + 1].name}</h5>
              <small>${data[index + 1].property_type}</small>
            </div>
            <div class="card-footer">
              <p class="card-text">R$ ${data[index + 1].price},00 / noite</p>
            </div>
          </div>
          <div class="card">
            <img src="${data[index + 2].photo}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${data[index + 2].name}</h5>
              <small>${data[index + 2].property_type}</small>
            </div>
            <div class="card-footer">
              <p class="card-text">R$ ${data[index + 2].price},00 / noite</p>
            </div>
          </div>
        </div>
        <br>
        <br>
      `;

      pagination.innerHTML = `
        <nav>
          <ul class="pagination justify-content-center">
            <li class="page-item active"><a class="page-link" href="#">1</a></li>
            <li class="page-item"><a class="page-link" href="#">2</a></li>
            <li class="page-item"><a class="page-link" href="#">3</a></li>
            <li class="page-item"><a class="page-link" href="#">4</a></li>
          </ul>
        </nav>
        <br>
        <br>
      `;

      append(li, cardDeck);
      append(ul, li);
    }
  });
})
.catch((error) => {
  // TODO: Add error message
});

