import React from 'react'
import { withRouter } from "react-router";
import SkillRow from "./skillrow"
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
            <section >
                {this.props.match.params.type === "Skills" && <SkillRow /> }
                {this.props.match.params.type === "Blog" && this.props.match.params.type}
                {this.props.match.params.type === "Projects" && this.props.match.params.type}
            </section>
        )
    }
}
export default withRouter(Lists)