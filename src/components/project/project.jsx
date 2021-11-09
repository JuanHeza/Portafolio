import React from "react"
import {Hexagon} from '../presentation/hexagon'

export class Project extends React.Component{
    render(){
        return(
            <article className="project">
                <section className="head flex row">
                    <div className="flex column identity">
                        <Hexagon front={this.props.icon} />
                        <h2 className="title">{this.props.title}</h2>
                        <div className="skillrow flex row wrap">
                            {this.props.skills.map((item) =>(
                                <Hexagon front={item.title} />
                            ))}
                        </div>
                    </div>
                    <div className="flex column detail">
                        <p className="intro">{this.props.intro}</p>
                        <div className="flex row jc-evenly projectDetail">
                            <div className="badge estado">{this.props.status}</div>
                            <div className="badge type">{this.props.tipo}</div>
                        </div>
                        <div className="flex row jc-evenly projectLinks">
                            <a href={this.props.github}><div className="badge">Github</div></a>
                            <a href={this.props.web}><div className="badge">Web</div></a>
                        </div>
                    </div>
                </section>
                
            </article>
        )
    }
}