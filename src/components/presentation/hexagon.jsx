// import './hexagon.css';
import React from 'react'

export class Hexagon extends React.Component {
  render(){
    return(
      <div className="coin" id={this.props.id}>
        <svg className="face" xmlns="http://www.w3.org/2000/svg" version="1.1" height="100%" width='100%' viewBox="0 0 300 300">
          <polygon className="border" transform="rotate(270 0 0)" transform-origin="center" points="300,150 225,280 75,280 0,150 75,20 225,20"></polygon>
          <polygon className="hex" transform="scale(0.85) rotate(270 0 0)" transform-origin="center" points="300,150 225,280 75,280 0,150 75,20 225,20"></polygon>
          <image loading="lazy" href={this.props.front} x="25%" y="25%" height="50%" width="50%"></image>
        </svg>

        <svg className="face backface" xmlns="http://www.w3.org/2000/svg" version="1.1" height="100%" width='100%' viewBox="0 0 300 300">
          <polygon className="border" transform="rotate(270 0 0)" transform-origin="center" points="300,150 225,280 75,280 0,150 75,20 225,20"></polygon>
          <polygon className="hex" transform="scale(0.85) rotate(270 0 0)" transform-origin="center" points="300,150 225,280 75,280 0,150 75,20 225,20"></polygon>
          <image loading="lazy" href={this.props.back} x="25%" y="25%" height="50%" width="50%"></image>
        </svg>
      </div>
    )
  }
}
Hexagon.defaultProps = {
  front: "",
  back: "",
  id: "",
  // colors: ""
}

export default class Honeycomb extends React.Component {
    render() {
        console.log(this.props)

        return (
            <div className="honeycomb">
                <div className="row border" >
                  <div className="hexagon-container" >
                    <Hexagon front={this.props.data.h1.front} id="honey-comb-1" />
                  </div>
                  <div className="hexagon-container" >
                    <Hexagon front={this.props.data.h2.front} id="honey-comb-2" />
                  </div>
                </div>
                <div className="row middle">
                  <div className="hexagon-container" >
                    <Hexagon front={this.props.data.h3.front} id="honey-comb-3" />
                  </div>
                  <div id="center-hexagon" className="hexagon-container" >
                    <Hexagon back={this.props.data.h4.back} id="honey-comb-4" />
                  </div>
                  <div className="hexagon-container" >
                    <Hexagon front={this.props.data.h5.front} id="honey-comb-5" />
                  </div>
                </div>
                <div className="row border" >
                  <div className="hexagon-container" >
                    <Hexagon front={this.props.data.h6.front} id="honey-comb-6" />
                  </div>
                  <div className="hexagon-container" >
                    <Hexagon front={this.props.data.h7.front} id="honey-comb-7" />
                  </div>
                </div>
                
            </div>
        )
    }
}