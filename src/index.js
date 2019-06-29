import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles/styles.scss';

// This is the method that actually renders our App to the screen, it takes two arguments:
// 1 - the component to be rendered && 2- where in the index.html file to render to.
// In this case, it is targeting the index.html file element with the 'id' of 'root'
ReactDOM.render(<App />, document.getElementById('root'));
