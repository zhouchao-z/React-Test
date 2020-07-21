import React from 'react';
import ReactDOM from 'react-dom';
import Pager from './Components/Pager.js';

const dataObj = {
  current: 1,
  total: 20,
  limit: 9,
  panelNumber: 5
};

ReactDOM.render(<Pager  {...dataObj}/>, document.getElementById('root'));














