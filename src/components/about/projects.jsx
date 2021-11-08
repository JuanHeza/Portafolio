import React from 'react'

export default class Projects extends React.Component{
    render(){
        return(
            <section id="projects">
                {/* ::before */}
                <h3 className="heading">Algunos Proyectos</h3>
                <div className="flex row wrap">
                    {this.props.list.map((item) => (
                        <div className="card flex row wrap">
                            <h4 className="name">{item.title}</h4>
                            <h5 className={"status "+item.status}>{item.detail}</h5>
                            <p className="body"> {item.body}</p>
                            <h5 className="heading">Skills</h5>
                            <div className="skillList flex row wrap jc-between ai-center">
                                {item.tools.map((tool) => (
                                    <h5 className="skill"> {tool}</h5>
                                    ))}
                            </div>
                        </div>
                    ))}
                </div>
                {/* ::after */}
            </section>
        )
    }
}
Projects.defaultProps = {
    list: [
        {detail: "terminado", title: "Fluffy Dragon", body: "movil", status: "idea", tools: ["A","B","C"]},
        {detail: "suspendido - 20%", title: "Artemiss", body: "multi", status: "planeacion", tools: ["A","B","C"]},
        {detail: "desarrollo - 1 dispositivo", title: "Hungry Ajolote", body: "desktop", status: "desarrollo", tools: ["A","B","C"]},
        {detail: "cancelado", title: "Watt-a-Bot", body: "software", status: "completado", tools: ["A","B","C"]},
        {detail: "desarrollo - 20%", title: "Elements", body: "hardware", status: "cancelado", tools: ["A","B","C"]},
        {detail: "idea", title: "Notebook", body: "web", status: "suspendido", tools: ["A","B","C"]},
      ]
}