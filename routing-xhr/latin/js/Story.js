const StoryComponent = (props) => (
      <div className="container mt-5">
        <h1>Рассказ №{props.match.params.id}</h1>
        {props.content.map(text => <p key={text}>{text}</p>)}  
      </div>
    );


function withFetcher(Component) {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        content: [],
      };
    }
    componentDidMount() {
      console.log(this.props);
      this.fetchContent(this.props);
    }
  
    fetchContent({ match }) {
      const fetchCount = parseInt(match.params.id, 10) ** 2;
  
      fetch(`https://baconipsum.com/api/?type=meat-and-filler&paras=${fetchCount}`)
        .then(response => response.json())
        .then(content => this.setState({ content }));
    }
  
    render() {
      const {content} = this.state.content;
      console.log(this.state);
      return <Component {...this.props} {...this.state}/>
    }
  }
}

const Story = withFetcher(StoryComponent);