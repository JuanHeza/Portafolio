import './hexagon.css';
import React from 'react'

class Hexagon extends React.Component {
  render(){
    return(
      <div className="coin">
        <svg className="face" xmlns="http://www.w3.org/2000/svg" version="1.1" height="100%" width='100%' viewBox="0 0 300 300">
          <polygon className="border" transform="rotate(270 0 0)" transform-origin="center" points="300,150 225,280 75,280 0,150 75,20 225,20"></polygon>
          <polygon className="hex" transform="scale(0.85) rotate(270 0 0)" transform-origin="center" points="300,150 225,280 75,280 0,150 75,20 225,20"></polygon>
          <image href="/icons/59.png" x="20%" y="20%" height="60%" width="60%"></image>
        </svg>

        <svg className="face backface" xmlns="http://www.w3.org/2000/svg" version="1.1" height="100%" width='100%' viewBox="0 0 300 300">
          <polygon className="border" transform="rotate(270 0 0)" transform-origin="center" points="300,150 225,280 75,280 0,150 75,20 225,20"></polygon>
          <polygon className="hex" transform="scale(0.85) rotate(270 0 0)" transform-origin="center" points="300,150 225,280 75,280 0,150 75,20 225,20"></polygon>
          <image href="" x="20%" y="20%" height="60%" width="60%"></image>
        </svg>
      </div>
    )
  }
}

class HexagonImage extends React.Component{
  render(){
    return(
        <Hexagon />
    )
  }
}

class Honeycomb extends React.Component {
    render() {
        console.log(this.props)

        return (
            <div className="honeycomb">
                <div className="row border" >
                  <div className="hexagon-container" >
                    <Hexagon />
                    <img src={this.props.data.h1.bi} alt="logo" id="honey-comb-1"/>
                  </div>
                  <div className="hexagon-container" >
                    <Hexagon />
                    <img src={this.props.data.h2.bi} alt="logo" id="honey-comb-2"/>
                  </div>
                </div>
                <div className="row middle">
                  <div className="hexagon-container" >
                    <Hexagon />
                    <img src={this.props.data.h3.bi} alt="logo" id="honey-comb-3"/>
                  </div>
                  <div id="center-hexagon" className="hexagon-container" >
                    <Hexagon />
                    <img src={this.props.data.h4.bi} alt="logo" id="honey-comb-4"/>  
                  </div>
                  <div className="hexagon-container" >
                    <Hexagon />
                    <img src={this.props.data.h5.bi} alt="logo" id="honey-comb-5"/>  
                  </div>
                </div>
                <div className="row border" >
                  <div className="hexagon-container" >
                    <Hexagon />
                    <img src={this.props.data.h6.bi} alt="logo" id="honey-comb-6"/>  
                  </div>
                  <div className="hexagon-container" >
                    <Hexagon />
                    <img src={this.props.data.h7.bi} alt="logo" id="honey-comb-7"/>  
                  </div>
                </div>
                
            </div>
        )
    }
}
    export default Honeycomb
    export {Hexagon, HexagonImage}