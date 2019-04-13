class App extends React.Component {
  render() {
    return (
        <div>
          <Header />
          <Switch>
            <Route exact path="/routing-xhr/latin/">
              <Homepage />
            </Route>
            <Route path="/routing-xhr/latin/article/:id" render={props => <Story {...props}/>} />
          </Switch>
        </div>

    );
  }
};