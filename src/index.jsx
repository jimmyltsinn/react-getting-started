import React from 'react';
import ReactDOM from 'react-dom';

// let hihi = 'gg';

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.timer = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return <div>Current time is {this.state.date.toLocaleTimeString()}</div>;
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
