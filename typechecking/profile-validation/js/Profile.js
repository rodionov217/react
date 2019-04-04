'use strict';

const profileStyle = {
  border: '1px solid #cccccc',
  borderRadius: '5px',
  width: '100%',
  height: '100%',
  margin: '5px'
};

const imageStyle = {
  width: '200px',
  height: '200px'
};

const Profile = props => {
  return (
    <div className="col-md-4 text-center" style={{marginBottom: '10px'}}>
      <div style={profileStyle}>
        <h2>{props.first_name} {props.last_name}</h2>
        <div>
          <img src={props.img} className="img-thumbnail" style={imageStyle}/>
        </div>
        <p>vk: <a href={props.url}>{props.url}</a></p>
        <p>birthday: <a href={props.birthday}>{props.birthday}</a></p>
      </div>
    </div>
  );
};

const checkPropType = (props, propName, componentName) => {
  let isCorrect, prop = props[propName];
  if (propName === 'birthday') {
    let dateString = prop;
    let date = new Date(dateString);
    isCorrect = (typeof dateString === 'string') && /^\d{4}-\d{2}-\d{2}$/.test(dateString) && date.toISOString().slice(0, 10) === dateString && date < new Date();
  } else if (propName === 'url') {
    let adr = prop;
    isCorrect = adr.substr(0, 17) === 'https://vk.com/id' && /[0-9]+|[A-Za-z0-9_-]+/.test(adr.substr(17));
  }
  if (!isCorrect) {
    return new Error(`Неправильный формат параметра ${propName} в компоненте ${componentName}`)
  }
  return null;
}

Profile.defaultProps = {
  img: './images/profile.jpg'
}

Profile.propTypes = {
  birthday: checkPropType,
  url: checkPropType
}

