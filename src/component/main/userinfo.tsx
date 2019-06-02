import * as React from 'react';
import Block from '../block';

class Userinfo extends React.Component {
  public render() {
    return (
      <div className="Userinfo">
        <Block/>
        <div className="info">
            <div className="username">NIC zheng</div>
            <div className="logo">k8s isnot my life</div>
            <div className="icon clearfix">
              <ul className="clearfix">
                <li><a href="#"><i className="iconfont icon-fangzi"/><br/> home</a></li>
                <li><a href="#"><i className="iconfont icon-categories"/><br/>categories</a></li>
                <li><a href="#"><i className="iconfont icon-archives"/><br/>archives</a></li>
                <li><a href="#"><i className="iconfont icon-tags"/><br/>tags</a></li>
                <li><a href="#"><i className="iconfont icon-about"/><br/>about</a></li>
                <li><a href="#"><i className="iconfont icon-search"/><br/>search</a></li>
              </ul>
            </div>
        </div>
        <Block/>
      </div>
    );
  }
}

export default Userinfo;
