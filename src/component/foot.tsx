import * as React from 'react';
import Block from './block';

class Foot extends React.Component {
  public render() {
    return (
      <div className="Foot">
        <Block/>
        <span>@2019 <i className="iconfont icon-heart"/> nic zheng</span><br/>
        <span>power By NIC | hosted by React&egg.js | total visited times</span>
      </div>
    );
  }
}

export default Foot;
