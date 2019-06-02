import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import './font//iconfont.css';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import './reset.css';

ReactDOM.render(
  <App />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
