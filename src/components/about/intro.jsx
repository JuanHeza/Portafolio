import React from 'react'
import {Hexagon} from '../presentation/hexagon'

export default class Intro extends React.Component{
    render(){
        return(
            <section id="intro" className="flex row wrap jc-evenly" >
                <div className=" identity ta-center flex column wrap js-center ai-center">
                    <Hexagon />
                    <h2 className="name ">Juan Enrique Hernandez Zavala</h2>
                    <h4 className="grade">Ingeniero en Tecnologia de Software</h4>
                </div>
                <p className="body"> {this.props.body} </p>
            </section>
        )
    }
}
Intro.defaultProps = {
    body: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque pen"
}