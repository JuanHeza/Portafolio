import React from 'react'

export default class Projects extends React.Component{
    render(){
        return(
            <section id="projects">
                {/* ::before */}
                <h3>Algunos Proyectos</h3>
                <div className="projectCard">
                    <h4>title</h4>
                    <h5><img className="status" src="" alt="" /> estado</h5>
                    <p> description</p>
                    <h5>skills</h5>
                    <div className="skillList">
                        <img className="skioll" src="" alt="Hexagon" />
                    </div>
                </div>
                {/* ::after */}
            </section>
        )
    }
}