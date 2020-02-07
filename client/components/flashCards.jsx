import React from 'react';
import AppContext from '../lib/context';

export default class FlashCards extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      flashCards: {}
    }
  }

  render(){
    // if(!this.state.flashCards) return null;
    return(
      <div className="flashcardContainer">

        <div className="flashcard">
          <div className="flashCardTop">
            <input type="text" placeholder="Enter Term"/>
          </div>
          <div className="flashCardBottom"></div>
        </div>
      </div>
    )
  }

}
