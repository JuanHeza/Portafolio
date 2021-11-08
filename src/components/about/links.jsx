import React from 'react'

export default class Links extends React.Component{
    render(){
        return(
            <section id="links" class="flex row wrap jc-evenly">
                {this.props.links.map((item) => (
                    <a className="card flex  row jc-center ai-center" target="_blank" rel="noreferrer" href={item.url}>
                        <img className="icon" src={item.icon} alt="" />
                        <div className="link"> 
                            <span className="web title">{item.link}</span>
                            <span className="print">{item.url}</span>
                        </div>
                    </a>
                ))}
            </section>
        )
    }
}
Links.defaultProps = {
    links: [
        {icon: "", link: "Github", url: "#"},
        {icon: "", link: "ReplIt", url: "#"},
        {icon: "", link: "Correo", url: "#"},
        {icon: "", link: "Telefono", url: "#"},
        {icon: "", link: "Notebook", url: "#"},
        {icon: "", link: "Telegram", url: "#"},
    ]
}