import React from 'react';
import ReactDOM from 'react-dom';
import './containers/index.css';
import App from './containers/App'; 
import reportWebVitals from './reportWebVitals';
import 'tachyons';
import { robots } from './robots';


ReactDOM.render(<App robots={robots}/>, document.getElementById('root'));
