'use strict'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 'All'
    }
  } 

  getSortedProjects() {
    return this.state.selected === 'All' ? 
    this.props.projects : 
    this.props.projects.filter(project => project.category === this.state.selected)
  }
  
  onSelectFilter = (filter) => {
    this.setState({selected: filter})
  }
  
  render() {
    return (
    <div>
      <Toolbar
        filters={this.props.filters}
        selected={this.state.selected}
        onSelectFilter={this.onSelectFilter} />
      <Portfolio projects={this.getSortedProjects()} />
    </div>
    )
  }
};
