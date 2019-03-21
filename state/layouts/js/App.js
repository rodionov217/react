'use strict';

const VIEW_LIST = "view_list";
const VIEW_MODULE = "view_module";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      layoutType: VIEW_MODULE
    };
  }

  onSwitch = event => { 
    console.log(event.currentTarget.textContent);
    const layout = event.currentTarget.textContent === VIEW_LIST ? VIEW_MODULE : VIEW_LIST;
    this.setState({layoutType: layout});
  }
  render() {
    return (
      <div>
        <div className="toolbar">
          <IconSwitch
            icon={this.state.layoutType}
            onSwitch={this.onSwitch} />
        </div>
        {this.renderLayout(this.state.layoutType === VIEW_LIST)}
      </div>
    );
  }

  renderLayout(cardView) {
    if (cardView) {
      return (
        <CardsView
          layout={this.props.layout}
          cards={this.getShopItems(this.props.products, cardView)} />
      );
    }
    return (<ListView items={this.getShopItems(this.props.products, cardView)} />);
  }

  getShopItems(products, cardView) {
    return products.map(product => {
      let cardProps = {
        title: product.name,
        caption: product.color,
        img: product.img,
        price: `$${product.price}`
      };
      if (cardView) {
        return (
          <ShopCard {...cardProps}/>
        );
      }
      return (<ShopItem {...cardProps}/>)
    });
  }
}
