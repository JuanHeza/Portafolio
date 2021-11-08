import React from 'react'
import { withRouter } from "react-router";
import SkillRow from "./skillrow"
import Projects from "./project"
import Blogs from "./blog"
import Skill from "./skill"
class Lists extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            type: this.props.match.params.type,
        }
    } 
    componentDidMount(){
        this.setState({
            type: this.props.match.params.type
        })
    }
    render(){
        return(
            <section className="list">
                {this.props.match.params.type === "Skills" ? <SkillRow /> : this.props.match.params.type === "Blog" ? <Blogs /> : this.props.match.params.type === "Projects" ? <Projects /> : this.props.match.params.Skill !== null ? <Skill skill={this.props.match.params.skill} /> : ""}
            </section>
        )
    }
}
export default withRouter(Lists)