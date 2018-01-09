import React from 'react';
import ReactDOM from 'react-dom';
import data from './testData';
import App from './components/App';

ReactDOM.render(
    <App contest={data.contest} headerMessage='Hello React Components!' />,
    document.getElementById('root')
);