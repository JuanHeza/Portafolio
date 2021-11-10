import React from 'react'
import {Hexagon} from "./hexagon";
import ProjectCard from "./project-card";
import BlogCard from "./blog-card";
import {SkillColumn} from "./skill-column";
import { Link } from "react-router-dom";

export class ProjectSection extends React.Component{
    render() {
        return(
            <section className="purple section projectSection">
                <h1 className="sectionTitle title">Projects</h1>
                <p className="sectionDescription">Algunos projectos en los que he trabajado recientemente</p>
                <div className="cards flex wrap jc-evenly">
                    {this.props.data.map((item) => (
                        <ProjectCard title={item.title} icon={item.icon} type={item.type} status={item.status}/>
                    ))}
                </div>
            </section>
        );
    }
}
ProjectSection.defaultProps = [
    {title: "", icon: "", type: "", status: ""}
]
export class AboutSection extends React.Component{
    render() {
        return(
            <section className="green section aboutSection flex column wrap">
                <h4 className="sectionTitle title">About</h4>
                <div className="content flex row jc-evenly wrap">
                    <p className="description">
                        Este texto lo terminare poniendo como un mensaje secreto pero se acerca la fecha en la que quiero tener esto en demo ya funcionando asi que estara aqui. La verdad es que quiero agradecer a todos aquiellos que me han apoyado dandome consejos o simplemente escuchandome hablar incansablemente sobre mis proyectos aun cuando no tienen idea de lo que les estoy diciendo. Citlali, Erika, Arali, Guadalupe, Alejandra & Jezzania son quienes mas me han escuchado hablar y las quiero muchisimo por eso.
                    </p>
                    <div className="links flex jc-center ai-center">
                        <Hexagon />
                        <div className="link flex jc-center ai-baseline" >Link</div>
                        <div className="link flex jc-center ai-baseline" >Link</div>
                        <div className="link flex jc-center ai-baseline" >Link</div>
                        <div className="link flex jc-center ai-baseline" >Link</div>
                    </div>
                </div>
                <Link to="About"> <div  className="link badge jc-center ai-center flex ">Ir</div> </Link>
            </section>
        );
    }
}
export class SkillsSection extends React.Component{
    render() {
        return(
            <section className="orange section skillSection flex row wrap jc-evenly">
                <h1 className="sectionTitle title">Skills</h1>
                {this.props.data.map((item)=> (
                    <SkillColumn level={item.level} skills={item.skills}/>
                ))}
            </section>
        );
    }
}
SkillsSection.defaultProps = [
    {level: "", skills: []}
]
export class BlogSection extends React.Component{
    render() {
        return(
            <section className="blue section blogSection">
                <h1 className="sectionTitle title">Blog</h1>
                <p className="sectionDescription">Algunos redacciones en los que he trabajado recientemente</p>
                <div className="cards flex wrap jc-evenly">
                    {this.props.data.map((item) => (
                        <BlogCard title={item.title} date={item.date} banner={item.banner} body={item.body}/>
                    ))}
                    {/* <BlogCard />
                    <BlogCard />
                    <BlogCard /> */}
                </div>
            </section>
        );
    }
}
BlogSection.defaultProps = [
    {title: "", date: "", banner: "", body: ""},
]