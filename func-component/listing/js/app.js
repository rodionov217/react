'use strict';

const xhr = new XMLHttpRequest();
xhr.addEventListener('load', onListLoaded);
xhr.open('GET', 'https://neto-api.herokuapp.com/etsy');
xhr.send();

function onListLoaded() {
  let items = JSON.parse(xhr.responseText); 
  if (!items) {
    console.log(xhr.response);
    return;
  }
  ReactDOM.render(<Listing items={items}/>, document.getElementById('root'))
}

function getLevel(quantity) {
  if (quantity <= 10) {
    return 'low';
  } else if (quantity > 20) {
    return 'high';
  }
  return 'medium';
}

function getPrice(price, code) {
  if (code === 'USD') {
    return '$' + price;
  } else if (code === 'EUR') {
    return '€' + price;
  }
  return price + ' ' + code;
}

function getTitle(title) {
  if (title.length > 50) {
    return title.slice(0, 50) + '...';
  }
  return title;
}

const ItemImage = ({link, imgSRC}) => {
  return (
    <div className="item-image">
      <a href={link}>
        <img src={imgSRC}/>
      </a>
    </div>
  )
}

const ItemDetails = ({item}) => {
  return (
    <div className="item-details">
      <p className="item-title">{getTitle(item.title)}</p>
      <p className="item-price">{getPrice(item.price, item.currency_code)}</p>
      <p className={`item-quantity level-${getLevel(item.quantity)}`}>{item.quantity} left</p>
    </div>
  )
}

const Item = ({item}) => {
  return (
    <div className="item">
      <ItemImage link={item.url} imgSRC={item.MainImage.url_570xN}/>
      <ItemDetails item={item}/>
    </div>
  )
}

const Listing = ({items}) => {
  return (
    <div className="item-list">
      {items.map(item => <Item item={item}/>)}
    </div>
  )
}
