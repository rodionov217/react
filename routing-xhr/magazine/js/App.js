const {BrowserRouter, Router, Route, Switch, NavLink, withRouter} = ReactRouterDOM;
const {createBrowserHistory} = History;

const App = () => {
  return(
    <div>
      <Nav />
      <Switch>
        <Route path="/routing-xhr/magazine/" exact component={Homepage}/>
        <Route path="/routing-xhr/magazine/subscribtion" render={props => <SubscribtionPage {...props} />}/>
        <Route path='/routing-xhr/magazine/article/:id' render={(props) => <ArticlePage {...props}/>}/>
      </Switch>
    </div>
  )};
