import React from "react";
import { Hexagon } from "./hexagon";
import { Link } from "react-router-dom";

export class ProjectCard extends React.Component {
  render() {
    return (
      <article className="flex wrap row jc-evenly">
        <div className="icon">
          <Hexagon />
        </div>
        <div className="info flex row wrap jc-evenly">
          <h4 className="flex column jc-center ai-center text title">{this.props.title}</h4>
          <span className={"flex badge plataforma column jc-center ai-center text "+this.props.type}>
            {this.props.type}
          </span>
          <span className={"flex badge estado column jc-center ai-center text " + this.props.status}>
            {this.props.status}
          </span>
        </div>
        <Link to="Project/Demo">
          <div className="link badge jc-center ai-center flex "> Ir </div>
        </Link>
      </article>
    );
  }
}
ProjectCard.defaultProps = {
  title: "", icon: "", type: "", status: ""
}