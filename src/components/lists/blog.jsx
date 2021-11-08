import React from 'react'

export default class Blog extends React.Component{
    render(){
        return(
            <section>
                <h2>Blogs</h2>
                <div>
                    cartas
                </div>
            </section>
        )
    }
}
Blog.defaultprops = [
    {banner: "", title: "text", date: "00/00/0000", body: "a really large text"},
    {banner: "", title: "text", date: "00/00/0000", body: "a really large text"},
    {banner: "", title: "text", date: "00/00/0000", body: "a really large text"},
    {banner: "", title: "text", date: "00/00/0000", body: "a really large text"},
    {banner: "", title: "text", date: "00/00/0000", body: "a really large text"},
    {banner: "", title: "text", date: "00/00/0000", body: "a really large text"}
]