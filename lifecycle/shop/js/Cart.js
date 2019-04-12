class Cart extends React.Component {

  constructor(props) {
    super(props);
  }

  shouldComponentUpdate(nextProps) {
    if (this.props.isOpen && nextProps.items.length !== this.props.items.length) {
      return true;
    }
    if (nextProps.isOpen !== this.props.isOpen) {
      return true;
    }
    return false;
  }
  
  render() {
    return (
      <CartView {...this.props} />
    );
  }
}
