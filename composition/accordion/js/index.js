'use strict';

class Accordion extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <main className="main">
        <h2 className="title">React</h2>
        {this.props.data.map((block, index) => <AccordionBlock {...block} key={index} />)}
      </main>
    )
  }
}

class AccordionBlock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    }
  }

  handleClick() {
    this.setState({
      open: !this.state.open
    })
  }

  getState() {
    return this.state.open ? "open" : "";
  }

  render() {
    const {title, text, key} = this.props;
    return (
      <section key={key} className={"section " + this.getState()}>
        <button>toggle</button>
        <h3 className="sectionhead" onClick={this.handleClick.bind(this)}>{title}</h3>
        <Article text={text}/>
      </section>
    )
  }

}

const Article = (props) => {
  return (
    <div className="articlewrap">
      <div className="article">{props.text}</div>
    </div>
  )
}