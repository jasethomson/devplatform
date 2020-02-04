import React from 'react';
import Home from './home';
import Jobs from './jobs';
import AppContext from '../lib/context';
import { BrowserRouter as Router, Route} from 'react-router-dom';



class App extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      placeHolder: false
    }
  }

  render(){
    return (
      <Router>
        <Route exact path="/" component={Home}/>
        <Route exact path="/jobs" component={Jobs}/>
      </Router>
    );
  }

}

export default App;
