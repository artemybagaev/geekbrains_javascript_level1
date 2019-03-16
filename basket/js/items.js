var items = [
  {
    Name: 'Tyrell P34 Roadster',
    Description: 'Lorem ipsum dolor sit.',
    Price: 14500,
    Picture: 'img/first.png'
  },
  {
    Name: 'Tyrell R54',
    Description: 'Lorem ipsum dolor sit.',
    Price: 15600,
    Picture: 'img/second.png'
  },
  {
    Name: 'Pagani P34',
    Description: 'Lorem ipsum dolor sit.',
    Price: 18990,
    Picture: 'img/third.png'
  },
  {
    Name: 'Ferrari F40',
    Description: 'Lorem ipsum dolor sit.',
    Price: 18990,
    Picture: 'img/forth.png'
  },
  {
    Name: 'Bugatti Veuron',
    Description: 'Lorem ipsum dolor sit.',
    Price: 18990,
    Picture: 'img/fifth.png'
  },
  {
    Name: 'Ferrari stragonezza',
    Description: 'Lorem ipsum dolor sit.',
    Price: 18990,
    Picture: 'img/sixsth.png'
  }
  ];

  // Добавляем заголовки товарам.
  var headings = document.getElementsByClassName('item_name');
  for (let i = 0; i < headings.length; i++) {
    headings[i].innerHTML = items[i].Name;
  }

  //Добавляем описание
  var descs = document.getElementsByClassName('descript');
  for (let i = 0; i < descs.length; i++) {
    descs[i].innerHTML = items[i].Description;
  }

  //Добавляем цены
  var prices = document.getElementsByClassName('pricetag');
  for (let i = 0; i < prices.length; i++) {
    prices[i].innerHTML = items[i].Price;
  }

  //Добавляем картинки
  var pictures = document.getElementsByClassName('itempic');
  for (let i = 0; i < pictures.length; i++) {
    pictures[i].setAttribute('src', items[i].Picture);
  }
