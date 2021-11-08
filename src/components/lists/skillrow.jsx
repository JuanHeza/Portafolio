import React from 'react'
import ProjectCard from "../presentation/project-card"
import BlogCard from "../presentation/blog-card"
import {Hexagon} from "../presentation/hexagon"
import {devicon} from "../../devicon"
export default class SkillRow extends React.Component{
    render(){
        console.log(this.props)
        return(
            <section>
                {this.props.data.map((item) => (
                <div className="skillRow">
                    <div className="flex row ai-center skillTitle">
                        <Hexagon front={devicon[item.skill.toLowerCase()]}/>
                        <h2 className="title">{item.skill}</h2>
                        <span> {'>>'} </span>
                    </div>
                    <div className="skillProjects flex row wrap"> 
                        <h3 className="skillTitle">Projects</h3>
                        <button> {'<'} </button> 
                        <div className="flex row projectSection"> 
                            {item.projects.map((pr) => (
                                <ProjectCard title={pr.title} icon={pr.icon} status={pr.status} type={pr.type} />
                            ))}
                        </div>
                        <button> {'>'} </button>
                    </div>
                    <div className="skillBlogs flex row wrap"> 
                        <h3 className="skillTitle">Blogs</h3>
                        <button> {'<'} </button> 
                        <div className="flex row blogSection">
                            {item.blogs.map((pr) => (
                                <BlogCard banner={pr.banner} title={pr.title} date={pr.date} body={pr.body} />
                            ))}
                        </div>
                        <button> {'>'} </button>
                    </div>
                </div>
                ))}
            </section>
        )
    }
}
SkillRow.defaultProps = {
    data: [
        {
            skill: "React",
            projects: [
                { icon: "", title: "title", status: "x", type: "y"},
                { icon: "", title: "title", status: "x", type: "y"},
                { icon: "", title: "title", status: "x", type: "y"},
                { icon: "", title: "title", status: "x", type: "y"},
                { icon: "", title: "title", status: "x", type: "y"},
            ],
            blogs: [
                {banner: "", title: "text", date: "00/00/0000", body: "a really large text"},
                {banner: "", title: "text", date: "00/00/0000", body: "a really large text"},
                {banner: "", title: "text", date: "00/00/0000", body: "a really large text"},
                {banner: "", title: "text", date: "00/00/0000", body: "a really large text"},
                {banner: "", title: "text", date: "00/00/0000", body: "a really large text"}
            ]
        },
        {
            skill: "C#",
            projects: [
                { icon: "", title: "title", status: "x", type: "y"},
                { icon: "", title: "title", status: "x", type: "y"},
                { icon: "", title: "title", status: "x", type: "y"},
                { icon: "", title: "title", status: "x", type: "y"},
                { icon: "", title: "title", status: "x", type: "y"},
            ],
            blogs: [
                {banner: "", title: "text", date: "00/00/0000", body: "a really large text"},
                {banner: "", title: "text", date: "00/00/0000", body: "a really large text"},
                {banner: "", title: "text", date: "00/00/0000", body: "a really large text"},
                {banner: "", title: "text", date: "00/00/0000", body: "a really large text"},
                {banner: "", title: "text", date: "00/00/0000", body: "a really large text"}
            ]
        }
    ],
}