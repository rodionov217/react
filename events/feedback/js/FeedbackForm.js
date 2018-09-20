'use strict';

const FeedbackForm = ({data, onSubmit}) => {
  let form;
  const submit = event => {
    event.preventDefault();
    const feedback = {
      salutation: form.querySelector('input[type=radio]:checked').value,
      name: form.querySelector('input[type=text]').value,
      subject: form.querySelector('select').value,
      message: form.querySelector('textarea').value,
      email: form.querySelector('input[type=email]').value,
      snacks: form.querySelector('input[type=checkbox]:checked').value
    }
    onSubmit(JSON.stringify(feedback));
  }

  return (
    <form ref={el => form = el} className="content__form contact-form" onSubmit={submit} >
  <div className="testing">
    <p>Чем мы можем помочь?</p>
  </div>
  <div  className="contact-form__input-group">
    <input defaultChecked={data.salutation === 'Мистер'} className="contact-form__input contact-form__input--radio" id="salutation-mr" name="salutation" type="radio" value="Мистер"/>
    <label className="contact-form__label contact-form__label--radio" htmlFor="salutation-mr">Мистер</label>
    <input defaultChecked={data.salutation === 'Мисис'} className="contact-form__input contact-form__input--radio" id="salutation-mrs" name="salutation" type="radio" value="Мисис" />
    <label className="contact-form__label contact-form__label--radio" htmlFor="salutation-mrs">Мисис</label>
    <input defaultChecked={data.salutation === 'Мис'} className="contact-form__input contact-form__input--radio" id="salutation-ms" name="salutation" type="radio" value="Мис" />
    <label className="contact-form__label contact-form__label--radio" htmlFor="salutation-ms">Мис</label>
  </div>
  <div className="contact-form__input-group">
    <label className="contact-form__label"  htmlFor="name">Имя</label>
    <input className="contact-form__input contact-form__input--text" id="name" name="name" type="text" placeholder={data.name || ''}/>
  </div>
  <div className="contact-form__input-group">
    <label className="contact-form__label"  htmlFor="email">Адрес электронной почты</label>
    <input className="contact-form__input contact-form__input--email" id="email" name="email" type="email" placeholder={data.email || ''}/>
  </div>
  <div className="contact-form__input-group">
    <label className="contact-form__label"  htmlFor="subject">Чем мы можем помочь?</label>
    <select className="contact-form__input contact-form__input--select" id="subject" name="subject" defaultValue={data.subject}>
      <option >У меня проблема</option>
      <option >У меня важный вопрос</option>
    </select>
  </div>
  <div className="contact-form__input-group">
    <label className="contact-form__label"  htmlFor="message">Ваше сообщение</label>
    <textarea className="contact-form__input contact-form__input--textarea" id="message" name="message" rows="6" cols="65" placeholder={data.message || ''}></textarea>
  </div>
  <div className="contact-form__input-group">
    <p className="contact-form__label--checkbox-group">Хочу получить:</p>
    <input defaultChecked={data.snacks[0] === 'пицца'} className="contact-form__input contact-form__input--checkbox" id="snacks-pizza" name="snacks" type="checkbox" value="пицца"/>
    <label className="contact-form__label contact-form__label--checkbox" htmlFor="snacks-pizza">Пиццу</label>
    <input defaultChecked={data.snacks[0] === 'пирог'} className="contact-form__input contact-form__input--checkbox" id="snacks-cake" name="snacks" type="checkbox" value="пирог"/>
    <label className="contact-form__label contact-form__label--checkbox" htmlFor="snacks-cake">Пирог</label>
  </div>
  <button className="contact-form__button" type="submit">Отправить сообщение!</button>
  <output id="result" />
</form>
  )
}
