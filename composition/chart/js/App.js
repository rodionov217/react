function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function compareNumbers(a, b) {
  return a - b;
}

class App extends React.Component {
  initialData = {
			series: ['France', 'Italy', 'England', 'Sweden', 'Germany'],
			labels: ['cats', 'dogs', 'horses', 'ducks', 'cows'],
			colors: ['#43A19E', '#7B43A1', '#F2317A', '#FF9824', '#58CF6C']
  }
	render() {
		return (
			<section>
        <Charts initialData={this.initialData}/>
        <Charts type="stacked" initialData={this.initialData}/>
        <Charts type="layered" initialData={this.initialData}/>
        <Charts type="horizontal" initialData={this.initialData}/>
        <Legend labels={this.initialData.labels} colors={this.initialData.colors}/>
			</section>
      
		);
	}
}

class Charts extends React.Component {
  constructor(props) {
    super(props);
    this.type = props.type === undefined ? '' : props.type;
    this.initialData = props.initialData;
    this.state = {data: []}
  }
  
  populateArray() {
    const	series = 5;
    const serieLength = 5;
    let data = new Array(series).fill(new Array(serieLength).fill(0));
    data = data.map(serie => serie.map(item => getRandomInt(0, 20)));

    this.setState({ data: data });
  }
  
  componentDidMount() {
		this.populateArray();
		setInterval(this.populateArray.bind(this), 2000);
	}

  render() {
    const data = this.state.data;
    const {colors, labels, series} = this.initialData;
    
    const max = data.reduce((max, serie) => Math.max(max, serie.reduce((serieMax, item) => Math.max(serieMax, item), 0)), 0);
    const classname = this.type === 'horizontal' ? 'horizontal' : '';

    return (
      <div className={"Charts " + classname}>
          {data.map((serie, serieIndex) => { 
            const params = {
              type: this.type,
              style: {height: this.type === 'horizontal' ? 'auto' : 250},
              colors: colors,
              max: max,
              serie: serie,
              key: serieIndex,
              label: labels[serieIndex]
            }
            return <ChartSerie {...params} />})}
      </div>
    )
  }
}

const ChartSerie = (props) => {
  const classname = props.type === "horizontal" ? "Charts--serie" : "Charts--serie " + props.type;
  return (
    <div className={classname} key={props.key} style={props.style}>
      <label>{ props.label }</label>
      {props.serie.map((item, itemIndex, serie) => { 
        const params = {
          type: props.type,
          key: itemIndex,
          item: item,
          serie: serie,
          color: props.colors[itemIndex],
          max: props.max
        }
        return <ChartItem {...params}/>})
      }
    </div>)
}

const ChartItem = (props) => {
  let sortedSerie = props.serie.slice(0);
  let sum = props.serie.reduce((carry, current) => carry + current, 0);
  let size = props.type === 'stacked' ? 
             props.item / sum * 100 : 
             props.item / props.max * 100;
  let style = {
    backgroundColor: props.color,
    height: size + '%',
    zIndex: props.item,
    opacity: props.type === 'stacked' ? 1 : props.item/props.max + .05
  };
  if (props.type === 'layered') {
    sortedSerie.sort(compareNumbers);
    style.right = ((sortedSerie.indexOf(props.item)) / (props.serie.length + 1)) * 100 + '%';
  } else if (props.type === 'horizontal') {
    style.width = size + '%';
    style.height = '';
  }
  return (
    <div
      className={"Charts--item " + props.type}
      style={ style }
      key={ props.key }
    >
      <b style={{ color: props.color }}>{ props.item }</b>
      </div>
  );
}

const Legend = ({labels, colors}) => {
  return (
    <div className="Legend">
      { labels.map((label, labelIndex) => {
        return (
        <div>
          <span className="Legend--color" style={{ backgroundColor: colors[labelIndex % colors.length]  }} />
          <span className="Legend--label">{ label }</span>
        </div>
        );
      }) }
    </div>
  )
}