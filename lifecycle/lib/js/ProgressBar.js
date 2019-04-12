class ProgressBar extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidUpdate() {
    this.draw();
  }

  componentDidMount() {
    this.ctx = this.canvas.getContext('2d');
    this.draw();
  }

  draw() {
    const progress = Math.round(this.props.completed / this.props.total * 100);
    const degrees = 360 * progress / 100;
    const radian = degrees * Math.PI / 180;

    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.drawOuter();
    this.drawText(progress);
    this.ctx.lineWidth = 7;
    this.ctx.strokeStyle = "#96d6f4";
    this.ctx.beginPath();
    this.ctx.arc(this.canvas.width/2, this.canvas.height/2, 45, 0, radian, false);
    this.ctx.stroke();
  }

  drawOuter() {
    this.ctx.lineWidth = 7;
    this.ctx.strokeStyle = "#4ca89a";
    this.ctx.beginPath();
    this.ctx.arc(this.ctx.canvas.width/2, this.ctx.canvas.height/2, 52, 0, Math.PI * 2, false);
    this.ctx.stroke();
  }

  drawText(progress) {
    this.ctx.textAlign = "center";
    this.ctx.textBaseLine = "middle";
    this.ctx.font="25px Lato";
    this.ctx.fillStyle = "#4e4e4e";
    this.ctx.fillText(progress+'%', this.canvas.width / 2, this.canvas.height / 2);
  }
  
  render() {
    return (
      <canvas ref={el => this.canvas = el} id="progressCanvas" className="progress" />
    );
  }
}
