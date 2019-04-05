const App = () => (
  <Router>
    <div className="tabs">
      <nav className="tabs__items">
        <NavLink to="/" exact className="tabs__item" activeClassName="tabs__item-active">Рефераты</NavLink>
        <NavLink to="/creator" className="tabs__item" activeClassName="tabs__item-active">Криэйтор</NavLink>
        <NavLink to="/fortune" className="tabs__item" activeClassName="tabs__item-active">Гадалка</NavLink>
      </nav>
      <div className="tabs__content">
      <Switch>
        <Route path="/creator" component={Creator}/>
        <Route path="/fortune" component={Fortune}/>
        <Route path="/" exact component={Essay}/>
      </Switch>
      </div>
    </div>
  </Router>
)
