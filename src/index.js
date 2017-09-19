import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './fetch-setup';

ReactDOM.render(
  <App fetchAll={fetch('/api/pets')}/>,
  document.getElementById('root')
);
