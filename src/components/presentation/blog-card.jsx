import React from "react";
// import { Hexagon } from "./hexagon";
import { Link } from "react-router-dom";

export default class BlogCard extends React.Component {
  render() {
    return (
      <article className="flex wrap row jc-evenly">
        <img loading="lazy" className="banner" src={this.props.banner} alt="Banner" onerror="this.onerror=null; this.src='icons/background.jpg';"/>
        <div className="info flex row wrap">
            <h4 className="title">{this.props.title}</h4>
            <sub className="date">{this.props.date}</sub>
            <p className="body">{this.props.body}</p>
        </div>
            <Link to="Blog/Demo"> <div  className="link badge jc-center ai-center flex ">Ir</div> </Link>
      </article>
    );
  }
}
BlogCard.defaultProps = { 
  title: "", date: "", banner: "../../img/background.jpg", body: ""
}