import * as React from 'react';
import './App.css';

import Fix from './component/fix';
import Foot from './component/foot';
import Header from './component/header';
import Article from './component/main/article';
import Page from './component/main/page';
import Userinfo from './component/main/userinfo'


class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <Header/>
        <Userinfo/>
        <Article/>
        <Page/>
        <Foot/>
        <Fix/>
      </div>
    );
  }
}

export default App;
