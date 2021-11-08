import React from 'react'

import {blogs} from '../../defaultVars'
import BlogCard from '../presentation/blog-card'
export default class Blog extends React.Component{
    render(){
        return(
            <section>
                <h2 className="title">Blogs</h2>
                <div className="flex row wrap content jc-evenly blogSection">
                    {this.props.blogs.map((pr) => (
                        <BlogCard banner={pr.banner} title={pr.title} date={pr.date} body={pr.body} />
                    ))}
                </div>
            </section>
        )
    }
}
Blog.defaultProps = {
    blogs: blogs
}