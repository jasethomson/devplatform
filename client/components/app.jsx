import React from 'react';
import Home from './home';
import Jobs from './jobs';
import Nav from './nav';
import Footer from './footer';
import FlashCards from './flashCards';
import AppContext from '../lib/context';
import { BrowserRouter as Router, Route} from 'react-router-dom';




export default class App extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      placeHolder: false
    }
  }

  render(){
    const contextValue = {
      placeHolder: this.state.placeHolder
    };
    return (
      <div>
        <Nav/>
        <AppContext.Provider value={contextValue}>
          <Router>
            <Route exact path="/" component={Home}/>
            <Route exact path="/flashcards" component={FlashCards}/>
          </Router>
        </AppContext.Provider>
        <Footer />
      </div>
    );
  }
}
