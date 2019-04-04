class SubscribeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isValid: true,
      value: ''
    }
  }

  handleInput(event) {
    console.log(event.currentTarget.validity.valid);
    this.setState({
      isValid: event.currentTarget.validity.valid,
      value: event.currentTarget.value
    })
  }

  isError() {
    return this.state.isValid ? "is-valid" : "is-error";
  }

  render() {
    return (
      <div className="subscribe__form">
      <form className={"form form--subscribe " + this.isError()}>
        <h4 className="form-title">Подписаться:</h4>
        <div className="form-group">
          <label htmlFor="input-email" className="sr-only">Email</label>
          <input value={this.state.value} 
                 onChange={this.handleInput.bind(this)} type="email" 
                 id="input-email" 
                 placeholder="Email" 
                 className="form-control"/>
          <div className="form-error">Пожалуйста, проверьте корректность адреса электронной почты</div>
          <button type="submit" className="form-next">
            <i className="material-icons">keyboard_arrow_right</i>
          </button>
        </div>
      </form>
    </div>
    )
  }
};