class SearchBox extends React.Component {

  constructor(props) {
    super(props);
    this.state = { fixed: false };
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    console.log(this.box);
    this.box = document.querySelector('.search-box');
    this.boxInitialPosition = this.box.offsetTop;

    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    this.setPosition();
  }

  isFixed() {
    if (window.pageYOffset >= this.boxInitialPosition && this.box.getBoundingClientRect().y <= 0 ) {
      return true;
    }
    return false;
  }

  setPosition() {
    this.setState({fixed: this.isFixed()})
  }

  render() {
    return <SearchBoxView fixed={this.state.fixed} />
  }
}
