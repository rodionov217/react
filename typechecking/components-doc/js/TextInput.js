'use strict';

const TextInput = props => {
  return (
    <div className="form-group">
      <label>{props.label}</label>
      <input type={props.type} className="form-control" name={props.name} onChange={props.onChange}
             defaultValue={props.value} required={props.required}/>
    </div>
  )
};

const emailPropType = (props, propName, componentName) => {
  let email = props[propName];
  let isEmail = (typeof email === 'string') && /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email);
  
  if (!isEmail) {
    console.log(isEmail);
    return new Error(`Неверный параметр ${propName} в компоненте ${componentName}: параметр должен быть адресом электронной почты`)
  }

  console.log(isEmail);
  return null;
}


const getPropType = (props, propName, componentName) => {
  if (props.name === 'email') {
    console.log(props);

    return emailPropType(props, propName, componentName);
  } 
   if (typeof props[propName] !== 'string') {
    return new Error(`Неверный параметр ${propName} в компоненте ${componentName}`)
  } 
  return null;
}

TextInput.propTypes = {
  name: PropTypes.string.isRequired,
  value: getPropType,
  onChange: PropTypes.func,
  required: PropTypes.bool
}