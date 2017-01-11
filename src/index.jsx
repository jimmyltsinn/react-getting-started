import React from 'react';
import ReactDOM from 'react-dom';

let hihi = 'gg';

ReactDOM.render(
  <h1>Hello, world! {hihi}</h1>,
  document.getElementById('root')
);

let tick = () => {
  console.log('gg');
  const element = (
    <div>Current time is {new Date().toLocaleTimeString()}</div>
  );
  ReactDOM.render(element, document.getElementById('root'));
};

setInterval(tick, 1000);
