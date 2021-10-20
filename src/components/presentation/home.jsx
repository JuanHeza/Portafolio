import React from 'react'
import "./home.css"
import { Link } from "react-router-dom";

class Home extends React.Component {
    render(){
      return(
        <section className="home">
          <article>
            <img className="icon" src="./icons/logo.svg" alt=""></img>
            <h1 className="title">Projects</h1>
            <div className="block"> Bloques</div>
            <Link to="/List/Projects">
              <button className="button"> Ir </button>
      			</Link> 
          </article>
          <article>
            <img className="icon" src="./icons/logo.svg" alt=""></img>
            <h1 className="title">Posts</h1>
            <div className="block"> Bloques</div>
            <Link to="/List/Posts">
              <button className="button"> Ir </button>
      			</Link> 
          </article>
          <article>
            <img className="icon" src="./icons/logo.svg" alt=""></img>
            <h1 className="title">Skills</h1>
            <div className="block"> Bloques</div>
            <Link to="/List/Skills">
              <button className="button"> Ir </button>
      			</Link> 
          </article>
          <article>
            <img className="icon" src="./icons/logo.svg" alt=""></img>
            <h1 className="title">About</h1>
            <div className="block"> Bloques</div>
            <Link to="/About">
              <button className="button"> Ir </button>
      			</Link> 
          </article>
        </section>
      )
    }
  }
  class Header extends React.Component {
    render(){
      return(
       <header className="header">
          <div className="main-banner">
               {/* <img src="./img/background.jpg" alt="Banner" /> */}
          </div>
          <div className="nav-bar">
            <Link to="/Home">
              <span className="name">Juan Heza</span>
            </Link>
            <nav className="nav-bar-options">
              <ul>
                <Link to="/List/Projects">
                  <li>Projects</li>
                </Link>
                <Link to="/List/Posts">
                  <li>Posts</li>
                </Link>
                <Link to="/List/Skills">
                  <li>Skils</li>
                </Link>
                <Link to="/About">
                  <li>About</li>
                </Link>
                <Link to="/Contact">
                  <li>Contact</li>
                </Link>
                  <li onClick={this.props.function}>Theme</li>
              </ul>
            </nav>
          </div>
       </header>
      )
    }
  }

  class Footer extends React.Component{
    render(){
      return(
        <footer className="footer">
          <div className="media">
            <div><i class="devicon-github-original"></i></div>
            <div>phone</div>
            <div>telegram</div>
            <div>replit</div>
            <div>email</div>
            <div>instagram</div>
          </div>
          <p> Developed By Future Star</p>
        </footer>
      )
    }
  }
export default Home
export {Header, Footer, Home}
