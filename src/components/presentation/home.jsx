import React from 'react';
// import "./home.css";
import {Hexagon} from "./hexagon";
import {ProjectSection, AboutSection, SkillsSection, BlogSection} from './home-sections';

class Home extends React.Component {
  render(){
      let Skills = [
        {level: "Aprendiendo", skills: ["Angular", "Sass", "Swift", "Tailwind", "VueJS"]},
        {level: "Basico", skills: ["Android", "C++", "C#", "Java", "MongoDB", "PHP", "Python"]},
        {level: "Intermedio", skills: ["Arduino", "Javascript", "Jquery", "MySQL", "PostgreSQL", "Ruby", "ruby on Rails"]},
        {level: "Avanzado", skills: ["CSS", "Go", "HTML", "React"]}
      ];
      let Blog = [
        {title: "Aprendiendo CSS Grid", date: "28/10/2021", banner: "./icons/background.jpg", body: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque pen"},
        {title: "Go to the future", date: "18/10/2021", banner: "./icons/background.jpg", body: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque pen"},
        {title: "React-ing", date: "30/10/2021", banner: "./icons/background.jpg", body: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque pen"},
        {title: "Python and pandas", date: "12/10/2012", banner: "./icons/background.jpg", body: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque pen"}
      ]
      let Projects = [
        {icon: "", title: "Fluffy Dragon", type: "movil", status: "idea"},
        {icon: "", title: "Artemiss", type: "multi", status: "planeacion"},
        {icon: "", title: "Hungry Ajolote", type: "desktop", status: "desarrollo"},
        {icon: "", title: "Watt-a-Bot", type: "software", status: "completado"},
        {icon: "", title: "Elements", type: "hardware", status: "cancelado"},
        {icon: "", title: "Notebook", type: "web", status: "suspendido"},
      ]
      return(
        <section className="home">
          <section className="home_head flex row ai-center">
            <p className="text_right">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque pen</p>
            <div id="big"><Hexagon /></div>
            <p className="text_left">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque pen</p>
            {/* <div className="home_head_front">
              <div className="picture">
                <img loading="lazy" src="" alt="" />
                <img loading="lazy" src="" alt="" />
              </div>
            </div> */}
          </section>
          <article id="home_flex">
            <div className="home_card green">
              <Hexagon />
              <h2 className='title'>About</h2>
              <p>Descripcion</p>
            </div>
            <div className="home_card orange">
              <Hexagon />
              <h2 className='title'>Skills</h2>
              <p>Descripcion</p>
            </div>
            <div className="home_card purple">
              <Hexagon />
              <h2 className='title'>Projects</h2>
              <p>Descripcion</p>
            </div>
            <div className="home_card blue">
              <Hexagon />
              <h2 className='title'>Blog</h2>
              <p>Descripcion</p>
            </div>
          </article>
            <article id="home_sections">
                <AboutSection />
                <SkillsSection data={Skills}/>
                <ProjectSection data={Projects}/>
                <BlogSection data={Blog}/>
            </article>
        </section>
      )
    }
  }
export default Home
