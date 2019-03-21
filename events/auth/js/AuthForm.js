'use strict';
const passwordRegEx = /[^\w]/gi;
const emailRegEx = /[^\w@\.\-]/gi;
console.log(passwordRegEx);
const AuthForm = ({onAuth}) => {

  const onSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    const user = {
      name: form.elements[0].value,
      email: form.elements[1].value,
      password: form.elements[2].value
    }

    if (onAuth && typeof onAuth === 'function') {
      onAuth(user);
    } else {
      throw 'onAuth is not a function';
    }
  }

  const onChange = event => {
    event.preventDefault();
    const target = event.currentTarget;
    if (target.type === 'email') {
      target.value = target.value.replace(emailRegEx, '');
    } else if (target.type === 'password') {
      target.value = target.value.replace(passwordRegEx, '');
    }
  }
  
  return (
    <form onSubmit={onSubmit} className="ModalForm" action="/404/auth/" method="POST">
      <div className="Input">
    <input required type="text" placeholder="Имя"/>
    <label></label>
  </div>
  <div className="Input">
    <input onChange={onChange} type="email" placeholder="Электронная почта"/>
    <label></label>
  </div>
  <div className="Input">
    <input onChange={onChange} required type="password" placeholder="Пароль"/>
    <label></label>
  </div>
  <button type="submit">
    <span>Войти</span>
    <i className="fa fa-fw fa-chevron-right"></i>
  </button>
</form>
  )
}