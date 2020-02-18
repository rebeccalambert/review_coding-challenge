import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

document.addEventListener("DOMContentLoaded", () => {
  // const div = document.createElement('div');
  const root = document.getElementById("root");

  ReactDOM.render(<App />, root);
  // ReactDOM.unmountComponentAtNode(div);
});
