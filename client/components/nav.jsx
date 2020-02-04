import React from 'react';
import AppContext from '../lib/context';


export default class Nav extends React.Component{
  render(){
    return(
      <nav>
        <div id="logo">
          <a href="/">
            <img src="./assets/devplatform_logo.png" alt="logo"/>
          </a>
        </div>
        <ul>
          <li>
            <a className="active" href="/">Home</a>
          </li>
          <li>
            <a href="/jobs">Jobs</a>
          </li>
          <li>
            <a href="/application_status">Application Status</a>
          </li>
          <li>
            <a href="/tech_daily">Tech Daily</a>
          </li>
          <li>
            <a href="/calendar">Calendar</a>
          </li>
          <li>
            <a href="/meetups">Meetups</a>
          </li>
        </ul>
      </nav>
    )
  }
}
