const {withRouter} = ReactRouterDOM;
const HeaderComponent = ({ location }) => {
  const id = location.pathname.match(/\/article\/(\d+)\/?$/i);
  return (
  <nav className="navbar navbar-light bg-light">
    {id ? <p className="navbar-brand">Уникальный идентификатор статьи: {id[1]}</p>
        : <p className="navbar-brand">Статья не выбрана</p>}
  </nav>
);
  }

const Header = withRouter(HeaderComponent);