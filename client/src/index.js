import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createBrowserHistory } from 'history';

const history = createBrowserHistory();
console.log(history)


ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
