import React from 'react';
import AppContext from '../lib/context';


export default class Footer extends React.Component {
  render() {
    return (
      <footer>
        <div id="left-footer">
          <div id="logo">
            <a href="/">
              <img src="./assets/devplatform_logo.png" alt="logo" />
            </a>
          </div>
          <ul>
            <li>
              <a href="/">Home</a>
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
        </div>
        <div id="right-footer">
          <h3>
            Developed by Jase Thomson<br />
            Learn more about Jase on
          </h3>
          <ul>
            <li>
              <a href="https://www.linkedin.com/in/jase-thomson/" target="_blank">
                <i className="fab fa-linkedin"></i>
              </a>
            </li>
            <li>
              <a href="https://www.github.com/jasethomson/" target="_blank">
                <i className="fab fa-github-square"></i>
              </a>
            </li>
            <li>
              <a href="https://www.jasethomson.com/" target="_blank">
                <i className="fas fa-briefcase"></i>
              </a>
            </li>
          </ul>
        </div>
      </footer>
    )
  }
}
