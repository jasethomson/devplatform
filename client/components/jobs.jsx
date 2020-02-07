import React from 'react';
import AppContext from '../lib/context';

export default class Jobs extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      meetUps: {}
    }
  }
  getMeetUps(){
    fetch('https://api.meetup.com/find/groups?zip=92620&radius=1&category=25&order=members')
    .then(res => res.json())
    .then(meetup => console.log(meetup))
  }

  render() {
    this.getMeetUps();
    return (
      <div>
        <h1>Jobs</h1>
      </div>
    );
  }
}

Jobs.contextType = AppContext;
