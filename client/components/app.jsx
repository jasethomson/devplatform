import React from 'react';

class App extends React.Component{
  constructor(props){
    super(props);
    this.setView = this.setView.bind(this);

    this.state = {
      view: {
        page: 'home',
        params: {}
      }
    }
  }

  setView(page,params){
    this.setState({view: {page, params}});
  }

  render(){
    if(this.state.view.page === "home"){
      return (
        <div>
          Hello, World <i className="fas fa-air-freshener"></i>
        </div>
      )
    }
  }
}

export default App;
