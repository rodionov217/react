const Homepage = (props) => {
console.log(props);
    return (
      <div>
        <div className="container">
          <SubscribtionLink />
          <div className="row m-3">
            {articles.map(article => <div className="col-sm" key={article.id}><Article {...article} /></div>)}
          </div>
        </div>
      </div>
    );
  
}

const SubscribtionLink = () => {
return (<div className="row m-3">
            <div className="col-sm">
              <div className="card">
              <img className="card-img-top" src={`https://picsum.photos/800/180}`} alt="Подписка" />
                <div className="card-body">
                  <p className="card-text">Уникальная возможность — подписаться на издание!</p>
                  <NavLink to="/routing-xhr/magazine/subscribtion" className="btn btn-primary">Подписаться</NavLink>
                </div>
              </div>
            </div>
          </div>)
}