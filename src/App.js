import React, { Component } from 'react';
import { BrowserRouter,Route,Switch } from 'react-router-dom'
import './App.css';
import {HomePageComponent} from './pages/home/home'

class App extends Component {
  constructor(props){
    super(props);
    console.log('App Component',this.props);
  }

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route path="/" render={()=>{return <HomePageComponent {...this.props}/>}}/>
            <Route path="/login" component={HomePageComponent} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
