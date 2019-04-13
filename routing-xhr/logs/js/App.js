const App = (props) => {
    const { logs } = props;
    return <Nav logs={logs}/>
};

class LogFetcher extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      logs: []
    }
  }

  componentDidMount() {
    fetch('https://baconipsum.com/api/?type=meat-and-filler&paras=50')
      .then(response => response.json())
      .then(logs => this.setState({ logs }));
  }

  render() {
    const {logs} = this.state;
    return <App logs={logs}/>
  }
}

const Nav = ({logs}) => {
  return (
    <div>
      <ul className="nav">
        <li className="nav-item">
          <NavLink className="nav-link" to="/routing-xhr/logs/">Текущие данные</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/routing-xhr/logs/archive">Архив</NavLink>
        </li>
      </ul>
      <Switch>
        <Route path="/routing-xhr/logs/archive">
          <Archive logs={logs} />
        </Route>
        <Route exact path="/routing-xhr/logs/">
          <Current logs={logs} />
        </Route>
      </Switch>
    </div>
  )
}