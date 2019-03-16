var basket = [];

function itemSum () {
  var sum = 0;
  for (let i = 0; i < basket.length; i++) {
    sum += basket[i].Price;
  }
  return sum;
}

function countBasket () {
  var newDiv = document.createElement('div');
  var basketDiv = document.getElementById('basket_div')
  basketDiv.innerHTML = 'Сумма товаров ' + itemSum();
}

function itemsBasketPush () {
  var nameTag = document.createElement('div');
  var priceTag = document.createElement('div');
  var deleteTag = document.createElement('div');
  total_name.appendChild(nameTag);
  total_price.appendChild(priceTag);
  delete_element.appendChild(deleteTag).innerHTML = "<input type = 'button' value = 'delete' onclick = 'deleteItem(this)'>";

  for (let i = 0; i < basket.length; i++) {
    // basket[i].Name;
    nameTag.innerHTML = basket[i].Name;
    priceTag.innerHTML = basket[i].Price;
  }
}

function deleteItem () {
  for (let i = 0; i < basket.length; i++) {
    delete basket[i];
  }
}
