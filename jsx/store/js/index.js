const item = {
  brand: 'Tiger of Sweden',
  title: 'Leonard coat',
  description: 'Minimalistic coat in cotton-blend',
  descriptionFull: 'Men\'s minimalistic overcoat in cotton-blend. Features a stand-up collar, concealed front closure and single back vent. Slim fit with clean, straight shape. Above-knee length.',
  price: 399,
  currency: '£'
}

const ShopItem = ({item}) => {
  return (
    <div className="main-content">
      <h2>{item}</h2>
    </div>
  )
}

ReactDOM.render(<ShopItem item={item} />, document.getElementById('root'));
