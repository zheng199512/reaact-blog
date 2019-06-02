import * as React from 'react';

class Page extends React.Component {
  public render() {
    return (
      <div className="Page">
       <ul className="page-num clearfix">
         <li><a href="#">1</a></li>
         <li><a href="#">2</a></li>
         <li><a href="#">3</a></li>
       </ul>
      </div>
    );
  }
}

export default Page;
