import React from 'react';
// import {Link} from 'react-router-dom';
import {Hexagon} from '../presentation/hexagon'
import {devicon} from '../../devicon'
import {blogs, projects} from '../../defaultVars'
import ProjectCard from '../presentation/project-card'
import BlogCard from '../presentation/blog-card'

export default class Skill extends React.Component {
    render(){
        return(
            <section className="skill flex column jc-center">
                <div className="flex row wrap jc-between head">
                    <Hexagon front={devicon[this.props.skill.toLowerCase()]} />
                    <div className="text">
                        <h2 className="title"> {this.props.skill}</h2>
                        <h4 className="intro">{this.props.intro}</h4>
                    </div>
                </div>
                <div className="skillProjects flex row wrap"> 
                    <h3 className="skillTitle title">Projects</h3>
                    <div className="flex row wrap content jc-evenly projectSection"> 
                        {this.props.projects.map((pr) => (
                            <ProjectCard title={pr.title} icon={pr.icon} status={pr.status} type={pr.type} />
                        ))}
                    </div>
                </div>
                <div className="skillBlogs flex row wrap"> 
                    <h3 className="skillTitle title">Blogs</h3>
                    <div className="flex row wrap content jc-evenly blogSection">
                        {this.props.blogs.map((pr) => (
                            <BlogCard banner={pr.banner} title={pr.title} date={pr.date} body={pr.body} />
                        ))}
                    </div>
                </div>
            </section>
        )
    }
}
Skill.defaultProps = {
    skill: "Test",
    intro: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque pen",
    projects: projects,
    blogs: blogs,
}