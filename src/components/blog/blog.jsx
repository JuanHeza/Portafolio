import React from 'react'
import {Hexagon} from "../presentation/hexagon"

export class Blog extends React.Component{
    render(){
        return(
            <article className="blog">
                <img src="" alt=""/>
                <h2 className="title">{this.props.title}</h2>
                <div className="flex row jc-between">
                    <h3 className="date">{this.props.fecha}</h3>
                    <h3 className="project">{this.props.project}</h3>
                </div>
                <div className="skillRow">
                    {this.props.skills.map((item) => (
                        <Hexagon front={item.title} />
                    ))}
                </div>
                <p className="intro">{this.props.intro}</p>
                <p className="body">{this.props.body}</p>
                <img src={this.props.image} alt="Body" className="imageBody" />
                <div className="flex row jc-evenly blogLinks">
                    <a href={this.props.github} className="button"></a>
                    <a href={this.props.replit} className="button"></a>
                </div>
            </article>
        )
    }
}
Blog.defaultProps={
    banner: "",
    title: "",
    fecha: "",
    project: "",
    skills: [],
    intro: "",
    body: "",
    image: "",
    github: "",
    replit: "",
}