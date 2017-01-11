import React from 'react';
import ReactDOM from 'react-dom';

// let hihi = 'gg';

class Toogle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      on: props.on,
      text: props.text,
    };
    this.handleClick = this.handleClick.bind(this); // Bind 'this' for handleClick handler
  }

  handleClick() {
    this.setState((prevState, props) => {
      props.onHandle(!prevState.on);
      return {on: !prevState.on};
    });

  }

  render() {
    return <button onClick={this.handleClick}>{this.state.text || ''}{this.state.on ? 'YES' : 'NO'}</button>;
  }
}

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  toUpdate(on) {
    if (on)
      this.timer = setInterval(() => this.tick(), 1000);
    else
      clearInterval(this.timer);
  }


  componentDidMount() {
    this.toUpdate(true);
  }

  componentWillUnmount() {
    this.toUpdate(false);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return <div>Current time is {this.state.date.toLocaleTimeString()}
      <Toogle
        text="update? "
        on="true"
        onHandle={this.toUpdate.bind(this)}
      /></div>; // Remember to bind this for the callback method
  }
}

// let update = () => {
ReactDOM.render(<Clock />, document.getElementById('root'));
// };

// ReactDOM.render(
//   <h1>Hello, world! {hihi}</h1>,
//   document.getElementById('root')
// );
//
// let tick = () => {
//   console.log('gg');
//   const element = (
//     <div>Current time is {new Date().toLocaleTimeString()}</div>
//   );
//   ReactDOM.render(element, document.getElementById('root'));
// };
