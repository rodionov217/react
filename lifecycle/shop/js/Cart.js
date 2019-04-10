class Cart extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      items: props.items,
      isOpen: props.isOpen
    }
  }

  componentWillReceiveProps(nextProps, nextState) {
    this.setState({items: nextProps.items, isOpen: nextProps.isOpen})
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.state.isOpen && nextProps.items.length !== this.state.items.length) {
      return true;
    }
    if (nextProps.isOpen !== this.state.isOpen) {
      return true;
    }
    return false;
  }
  
  render() {
    console.log('render cart');
    return (
      <CartView {...this.props} />
    );
  }
}
