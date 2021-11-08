import React from 'react'
import {projects} from '../../defaultVars'
import ProjectCard from '../presentation/project-card'

export default class Project extends React.Component{
    render(){
        return(
            <section>
                <h2 className="title">Projects</h2>
                <div className="flex row wrap content jc-evenly projectSection"> 
                        {this.props.projects.map((pr) => (
                            <ProjectCard title={pr.title} icon={pr.icon} status={pr.status} type={pr.type} />
                        ))}
                    </div>
            </section>
        )
    }
}
Project.defaultProps = {
    projects: projects
}