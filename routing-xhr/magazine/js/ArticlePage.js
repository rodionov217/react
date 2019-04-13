const ArticlePage = ({match}) => {
    console.log(typeof match.params.id); // STRING !!!!!!!
    const id = +match.params.id;
    const article = articles.find(a => a.id === id);
    return (
      <div>
        <article className="container m-5">
          <h1>{article.title}</h1>
          {article.body.split('\n').map(text => <p key={text}>{text}</p>)}
        </article>
      </div>
    );
  
}
