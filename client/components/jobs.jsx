import React from 'react';
import AppContext from '../lib/context';

export default class Jobs extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    console.log(this.context);
    return (
      <div>
        <h1>Jobs</h1>
      </div>
    );
  }
}

Jobs.contextType = AppContext;
