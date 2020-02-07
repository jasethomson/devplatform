import React from 'react';
import AppContext from '../lib/context';

export default class Home extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      quote: null
    }
  }

  componentDidMount(){
    this.getQuote();
  }

  getQuote(){
    fetch('https://programming-quotes-api.herokuapp.com/quotes/random/lang/sr')
    .then(res => res.json())
    .then(quote => this.setState({quote: quote.en}))
  }

  render() {
    return (
      <div id="homePage">
        <h1>{this.state.quote}</h1>
      </div>
    );
  }
}
