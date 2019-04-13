'use strict';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: []
        };
    }

    componentDidMount() {
        axios.get('https://api.myjson.com/bins/l2s9l').then(response => {
            this.setState(response.data);
        });
    }

    render() {
        return (
            <div id="app">
                <SortedByMonth data={this.state.list}/>
                <SortedByYear data={this.state.list}/>
                <SortedByDate data={this.state.list}/>
            </div>
        );
    }
};

const SortedByMonth = withSorting('month')(MonthTable);
const SortedByYear = withSorting('year')(YearTable);
const SortedByDate = withSorting('date')(SortTable);

function withSorting(type) {
  return Component => class extends React.Component {
    getSorted(data) {
      data.forEach(el => el.date = new Date(el.date));
      data = data.sort((a, b) => b.date - a.date);
      return this.sortByType(data);
    } 

    sortByType(data) {
      switch (type) {
        case 'year':
          return data.map(el => {
            return {year: el.date.getFullYear(), amount: el.amount}
          });
        case 'date': 
          return data.map(el => {
            return {date: el.date.toISOString().slice(0, 10), amount: el.amount}
          });
        case 'month':
        return data
                .reverse()
                .filter(el => el.date.getFullYear() === 2018)
                .map(el => {
                  return {
                    month: el.date.toDateString().split(' ')[1],
                    amount: el.amount
                  }
                });
      }
    } 

    render() {
      const data = this.props.data.slice();
      return <Component list={this.getSorted(data)} />
    }
  }
}