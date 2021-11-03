import React from 'react'
import Intro from './intro'
import Links from './links'
import Experiencia from './experiencia'
import Estudios from './estudios'
import Skills from './skills'
import Projects from './projects'
export default class About extends React.Component{
    render(){
        return(
            <section id="about">
                <Intro />
                <Links />
                <Experiencia />
                <Estudios />
                <Skills />
                <Projects />
            </section>
        )
    }
}