import React from 'react'
import {Hexagon} from '../presentation/hexagon'
import {devicon} from "../../devicon"
export default class Skills extends React.Component{
    render(){
        return(
            <section id="skills">
                <h3 className="heading">Skills</h3>
                <div className="level flex row jc-evenly">
                    {this.props.list.map((item) => (
                    <div className="flex column">
                        <h4 className="title">{item.level}</h4>
                        {item.skills.map((i) => (
                            <div className="card flex row jc-between ai-center">
                                <Hexagon front={devicon[i.toLowerCase()]}/>
                                <h5 className="name">{i}</h5>
                            </div>
                        ))}
                    </div>
                    ))}
                </div>
            </section>
        )
    }
}
Skills.defaultProps = {
    list: [
        {level: "Aprendiendo", skills: ["Angular", "Sass", "Swift", "Tailwind", "VueJS"]},
        {level: "Basico", skills: ["Android", "C++", "C#", "Java", "MongoDB", "PHP", "Python"]},
        {level: "Intermedio", skills: ["Arduino", "Javascript", "Jquery", "MySQL", "PostgreSQL", "Ruby", "ruby on Rails"]},
        {level: "Avanzado", skills: ["CSS", "Go", "HTML", "React"]}
      ]
}