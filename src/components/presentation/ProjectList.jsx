import React from 'react'
import { Link } from "react-router-dom";
import {Hexagon} from "./hexagon"
import "./projectList.css"

export class ProjectCard extends React.Component {
    render(){
        return(
            <article className="projectCard">
                <div className="banner">
                    <img src="" alt="banner" />
                </div>
                <div className="info">
                    <div className="icon">
                        <Hexagon />
                    </div>
                    <div className="text">
                        <details>
                            <summary>
                                <h1>Title</h1>
                            </summary>
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque pen</p>
                        </details>
                        <Link to="/">Go</Link>
                    </div>
                    {/* <div className="buttons">
                        <button>Expand</button>
                    </div> */}
                </div>
            </article>
        )
    }
}

export default class ProjectList extends React.Component {
    render(){
        return(
            <section>
                <div className="projects">
                    <ProjectCard />
                    <ProjectCard />
                    <ProjectCard />
                    <ProjectCard />
                    <ProjectCard />
                    <ProjectCard />
                </div>
                <div className="pagination">
                    <ul className="buttonGroup">
                        <li> B </li>
                        <li> 1 </li>
                        <li> 2 </li>
                        <li> 3 </li>
                        <li> F </li>
                    </ul>
                </div>
            </section>
        )
    }
}