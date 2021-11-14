// import './loading.css';
import Honeycomb, {Hexagon} from "./hexagon"
import React from 'react'
import { Redirect } from 'react-router-dom';
import "./loading.css"

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
              h1:{front: "./icons/apple.png"},
              h2:{front: "./icons/HungryAjolote.png"},
              h3:{front: "./icons/TCGame.png"},
              h4:{back: "./icons/logo.png"},
              h5:{front: "./icons/Coin.png"},
              h6:{front: "./icons/Totodile.png"},
              h7:{front: "./icons/icon.png"},
          }}/>
          {/* <img loading="lazy" src={logo} className="App-logo" alt="logo" /> */}
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
