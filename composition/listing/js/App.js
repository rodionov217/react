'use strict';
 

class List  extends React.Component {
  color(type) {
    switch(type) {
      case 'unisex':
        return "black";
      case 'male':
        return "blue";
      case 'female':
        return "orange";
    }
  }
  render() {
    return (
      <main>
        {this.props.items.map(item => <Item color={this.color(item.type)} item={item}/>)}
      </main>
    )
  }
} 

const App = ({items}) => { 
return (
      <List items={items} />
    );
  
}
