function listItems(item) {
  return (
    <li><a href={item.href}>{item.title}</a></li>
  )
}

const Menu = ({items, opened}) => {
  if (opened === undefined || opened === false) {
    return (
      <div className="menu">
        <div className="menu-toggle"><span></span></div>
      </div>
    )
  } else {
    return (
      <div className="menu menu-open">
        <div className="menu-toggle"><span></span></div>
        <nav>
          <ul>
            {items.map(listItems)}
          </ul>
        </nav>
      </div>
    )
  }
}