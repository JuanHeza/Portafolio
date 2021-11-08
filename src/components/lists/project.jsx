import React from 'react'

export default class Project extends React.Component{
    render(){
        return(
            <section>
                <h2>Propjects</h2>
                <div>
                    cartas
                </div>
            </section>
        )
    }
}
Projects.defaultProps = [
    { icon: "", title: "title", status: "x", type: "y"},
    { icon: "", title: "title", status: "x", type: "y"},
    { icon: "", title: "title", status: "x", type: "y"},
    { icon: "", title: "title", status: "x", type: "y"},
    { icon: "", title: "title", status: "x", type: "y"},
    { icon: "", title: "title", status: "x", type: "y"},
    { icon: "", title: "title", status: "x", type: "y"}
]