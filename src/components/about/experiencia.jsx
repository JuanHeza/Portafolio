import React from 'react'
import {Hexagon} from '../presentation/hexagon'

export default class Experiencia extends React.Component{
    render(){
        return(
            <section id="experiencia" >
                <h3 className="heading">Experiencia</h3>
                <div className="flex row wrap">
                    {this.props.jobs.map((job) => (
                        <div className="card flex row jc-evenly">
                            <Hexagon />
                            <div className="info flex column jc-between">
                                <h5 className="job">{job.title}</h5>
                                <h5 className="place">{job.place}</h5>
                                <h6 className="period">{job.start} {'->'} {job.end}</h6>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        )
    }
}
Experiencia.defaultProps = {
    jobs: [
        {title: "Tester - Servicio Social", place: "UANL - DTI", start: "Junio 2018", end:"Diciembre 2018"},
        {title: "Desarrollador Front End", place: "Inelco", start: "Septiembre 2021", end:"Actualidad"}
    ]
}