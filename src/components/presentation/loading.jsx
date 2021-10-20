import './loading.css';
import Honeycomb, {Hexagon} from "./hexagon"
import React from 'react'
import { Redirect } from 'react-router-dom';

class Loading extends React.Component {
  constructor(props){
    super(props);
    this.state = {redirect: false};
  }
  componentDidMount(){
    setTimeout(() => {
      this.setState({redirect: true});
    },11000)
  }
  
  componentWillUnmount(){
    this.setState({redirect: false});
  }

  render(){
    return (
      <div class="loading">
        <Honeycomb data={{
              h1:{bi: "./icons/aarch64-original.svg"},
              h2:{bi: "./icons/aftereffects-original.svg"},
              h3:{bi: "./icons/amazonwebservices-original.svg"},
              h4:{bi: "./icons/android-original.svg"},
              h5:{bi: "./icons/angularjs-original.svg"},
              h6:{bi: "./icons/apache-original.svg"},
              h7:{bi: "./icons/appcelerator-original.svg"},
          }}/>
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <div className="lema">
            <div id="row-1" className="lema-row"> <span class="hexal"><Hexagon /></span > <span className="text">Idea</span>  <span class="hexal"><Hexagon /></span> </div>
            <div id="row-2" className="lema-row"> <span class="hexal"><Hexagon /></span > <span className="text">Design</span>  <span class="hexal"><Hexagon /></span> </div>
            <div id="row-3" className="lema-row"> <span class="hexal"><Hexagon /></span > <span className="text">Create</span>  <span class="hexal"><Hexagon /></span> </div>
          </div>
          {this.state.redirect && <Redirect to="/Home" /> }
      </div>
    );
  }
}

export default Loading;
