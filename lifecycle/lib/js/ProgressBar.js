class ProgressBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {...props};
  }

  componentWillMount() {
    this.done = (this.state.completed / this.state.total * 100).toFixed(0);
  } 

  componentWillReceiveProps(nextProps, nextState) {
    this.setState({...nextProps});
    this.done = Math.round(nextProps.completed / nextProps.total * 100);
    this.draw();
  }

  componentDidMount() {
    this.ctx = this.canvas.getContext('2d');
    this.draw();
  }

  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.drawOuter();
    this.drawText();
    this.ctx.lineWidth = 7;
    this.ctx.strokeStyle = "#96d6f4";
    this.ctx.beginPath();
    this.ctx.arc(this.ctx.canvas.width/2, this.ctx.canvas.height/2, 45, 0, this.done / 100 * Math.PI * 2, false);
    this.ctx.stroke();
  }

  drawOuter() {
    this.ctx.lineWidth = 7;
    this.ctx.strokeStyle = "#4ca89a";
    this.ctx.beginPath();
    this.ctx.arc(this.ctx.canvas.width/2, this.ctx.canvas.height/2, 52, 0, Math.PI * 2, false);
    this.ctx.stroke();
  }

  drawText() {
    this.ctx.textAlign = "center";
    this.ctx.font="30px Lato";
    this.ctx.fillStyle = "#4e4e4e";
    this.ctx.fillText(this.done+'%', this.canvas.width * 0.5, this.canvas.height* 0.57, 65);
  }
  
  render() {
    return (
      <canvas ref={el => this.canvas = el} id="progressCanvas" className="progress" />
    );
  }
}
