'use strict';

const VIEW_LIST = "view_list";
const VIEW_MODULE = "view_module";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      layout: VIEW_MODULE
    }
  }

  getIcon = () => this.state.layout === VIEW_MODULE ? VIEW_LIST : VIEW_MODULE;

  handleSwitch = () => this.setState({
    layout: this.state.layout === VIEW_MODULE ? VIEW_LIST : VIEW_MODULE
  });

  isCardView = () => this.state.layout === VIEW_MODULE;

  render() {
    return (
      <div>
        <div className="toolbar">
          <IconSwitch
            icon={this.getIcon()}
            onSwitch={this.handleSwitch} />
        </div>
        {this.renderLayout(this.isCardView())}
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
