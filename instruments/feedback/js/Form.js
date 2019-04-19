class Form extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      name: '',
      text: ''
    }

    this.send = this.send.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  send() {
    console.log("Name:", this.state.name, "Text:", this.state.text);
    this.setState({name: '', text: ''})
  }

  handleChange(e) {
    this.setState({ 
      [e.target.name]: e.target.value
     });
  }

  render() {
    const {name, text} = this.state;
    const done = name.length > 0 && text.length > 0;

    return (
      <main className="container">
        <div className="row">
          <section className="col-ls-6 offset-lg-3 col-sm-12">
            <div className="form">
              <h2>Обратная связь</h2>
              <p>Нам важно ваше мнение</p>

              <label>
                Имя
                <input autoComplete="off" className="input" name="name" value={this.state.name} onChange={this.handleChange} />
              </label>

              <label>
                Сообщение
                <textarea className="input" name="text" value={this.state.text} onChange={this.handleChange}></textarea>
              </label>

              <button className={`form__send ${done ? '' : 'form__send-disabled'}`} onClick={done ? this.send : null}>Отправить</button>
            </div>
          </section>
        </div>
      </main>
    );
  }
}
