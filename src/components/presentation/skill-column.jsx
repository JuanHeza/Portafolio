import React from 'react';
import {Hexagon} from "./hexagon";
import {devicon} from "../../devicon"
export class SkillColumn extends React.Component{
    render(){
        return(
            <article>
                <h4 className="title">{this.props.level}</h4>
                <div className="skills flex row wrap">
                    {this.props.skills.map((skill) => (
                        <Hexagon front={devicon[skill.toLowerCase()]}/>
                    ))}
                </div>
            </article>
        )
    }
}
SkillColumn.defaultProps = {
    level: "",
    skills: []
}