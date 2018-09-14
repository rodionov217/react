'use strict';

function Listing({items}) {
  const getQuantityLevel = qty => qty <= 10 ? 'level-low' : (
    qty > 20 ? 'level-high' : 'level-medium'
  );
  const getTitle = title => title.length <= 50 ? title : title.slice(0, 50) + '...';
  const getPrice = (price, code) => code === 'USD' ? '$' + price : (
    code === 'EUR' ? '€' + price : price + ' ' + code
  );
  
  const itemBlocks = items.map(item => (
    <div className="item">
      <div className="item-image">
        <a href={item.url}>
          <img src={item.MainImage.url_570xN}/>
        </a>
      </div>
      <div className="item-details">
        <p className="item-title">{getTitle(item.title)}</p>
        <p className="item-price">{getPrice(item.price, item.currency_code)}</p>
        <p className={"item-quantity " + getQuantityLevel(item.quantity)}>{item.quantity + ' left'}</p>
      </div>
    </div>
  ))
  
  return (
    <div className="item-list">
      {itemBlocks}
    </div>
  )
}

let items = [];
const xhr = new XMLHttpRequest();
xhr.addEventListener('load', () => {
  items = JSON.parse(xhr.responseText);
  ReactDOM.render(<Listing items={items} />, document.getElementById('root'));
})
xhr.open('GET', 'https://neto-api.herokuapp.com/etsy', true);
xhr.send();