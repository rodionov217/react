const monthsAltered = ['Января', "Февраля", "Марта", "Апреля", "Мая", "Июня", "Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря"];
const weekdays = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"];
const weekdaysShort = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];

function upperCaseFirstLetter(str) {
  return str[0].toUpperCase() + str.slice(1);
}

const Header = ({date}) => {
  return (
    <div className="ui-datepicker-material-header">
    <div className="ui-datepicker-material-day">{weekdays[date.getDay() - 1]}</div>
    <div className="ui-datepicker-material-date">
      <div className="ui-datepicker-material-day-num">{date.getDate()}</div>
      <div className="ui-datepicker-material-month">{monthsAltered[date.getMonth()]}</div>
      <div className="ui-datepicker-material-year">{date.getFullYear()}</div>
    </div>
  </div>
  )
}

const HeaderSmall = ({date}) => {
  return (
    <div className="ui-datepicker-header">
      <div className="ui-datepicker-title">
        <span className="ui-datepicker-month">{upperCaseFirstLetter(date.toLocaleString('ru-Ru', {month: 'long'}))}</span>
        &nbsp;
        <span className="ui-datepicker-year">{date.getFullYear()}</span>
      </div>
  </div>
  )
}

const CalendarBody = ({date}) => {
  const today = date.getDate();
  const thisMonthStarts = new Date(date.getFullYear(), date.getMonth(), 1);
  const firstWeekDay = thisMonthStarts.getDay();
  const nextMonthStarts = new Date(date.getFullYear(), date.getMonth() + 1, 1);
  const thisMonthEnds = new Date(nextMonthStarts - 1);

  let month = [];
  let week = [];
  let d = 1;
  let prev = (new Date(thisMonthStarts.setDate(-firstWeekDay + 2))).getDate();
  let next = 1;
  for (let w = 1; w <= 6; w++) {
    for (let i = 1; i <= 7; i++) {
      if (firstWeekDay !== 1 && prev <= 31) {
        week.push(<td className="ui-datepicker-other-month">{prev++}</td>);
      } else if (d > thisMonthEnds.getDate()) {
        week.push(<td className="ui-datepicker-other-month">{next++}</td>);
      } else if (d === today) {
        week.push(<td className="ui-datepicker-today">{d++}</td>);
      } else {
        week.push(<td>{d++}</td>);
      }
    }
    month.push(<tr>{week}</tr>);
    week = [];
  }
  return <tbody>{month}</tbody>
  
}

const Table = ({date}) => {
  return (
    <table className="ui-datepicker-calendar">
      <colgroup>
        {Array(7).fill('').map((el,i) => 
          i < 5 ? <col/> : <col className="ui-datepicker-week-end"/>
        )}
      </colgroup>
      <thead>
        <tr>
          {Array(7).fill('').map((el, i) => 
          <th scope="col" title={weekdays[i]}>{weekdaysShort[i]}</th>)}
        </tr>
      </thead>
      <CalendarBody date={date} />
    </table>
  )
}

const Calendar = ({date}) => {
  return (
    <div className="ui-datepicker">
      <Header date={date} />
      <HeaderSmall date={date} />
      <Table date={date} />
    </div>
  )
}