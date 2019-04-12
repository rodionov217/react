'use strict';

const DateTime = props => {
    return (
        <p className="date">{props.date}</p>
    )
};

function DateTimePretty(DateComponent) {
  return class extends React.Component {
    static get displayName() {
      const name = DateComponent.displayName || DateComponent.name || 'Component';
      return `DateTimePretty(${name})`;
    }
    
    isPlural(period) {
      return period > 1 ? 's' : '';
    }

    getPrettyDate() {
      const now = new Date();
      const videoDate = new Date(this.props.date);
      const minutes = Math.round((now - videoDate) / 60000);
      const hours = Math.round(minutes / 60);
      const days = Math.round(hours / 24);

      if (hours < 1) {
        return `${minutes} minute${this.isPlural(minutes)} ago`;
      } 
      if (hours < 24) {
        return `${hours} hour${this.isPlural(hours)} ago`;
      } 
      return `${days} day${this.isPlural(days)} ago`;
    }

    render() {
      return <DateComponent date={this.getPrettyDate()} />
    }
  }
}