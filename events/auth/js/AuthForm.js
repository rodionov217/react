'use strict';
const AuthForm = ({onAuth}) => {
  let name, email, password;

  const passwordRegEx =  /\w/gi;
  const emailRegEx = /.|-|@|\w/gi;
  const onChange = event => {
    const input = event.nativeEvent.target;
    if (input.type === 'email') {
      if (!event.nativeEvent.data.match(emailRegEx)) {
        input.value = input.value.slice(0, -1);
      }
      email = input.value;
    } else if (input.type === 'password') {
      if (!event.nativeEvent.data.match(passwordRegEx)) {
        input.value = input.value.slice(0, -1);
      } 
      password = input.value;
    } else {
      name = input.value;
    }
  }
  const onSubmit = event => {
    event.preventDefault();
    const user = {
      name: name, 
      email: email, 
      password: password
    }
    if (onAuth && typeof onAuth === 'function') {
      onAuth(user);
    }
  }
  
  return (
    <form className="ModalForm" action="/404/auth/" method="POST" onSubmit={onSubmit}>
      <div className="Input">
        <input required type="text" placeholder="Имя" onChange={onChange}/>
        <label></label>
      </div>
      <div className="Input">
        <input type="email" placeholder="Электронная почта" onChange={onChange}/>
        <label></label>
      </div>
      <div className="Input">
        <input required type="password" placeholder="Пароль" onChange={onChange}/>
        <label></label>
      </div>
      <button type="submit">
        <span>Войти</span>
        <i className="fa fa-fw fa-chevron-right"></i>
      </button>
    </form>
  )
}