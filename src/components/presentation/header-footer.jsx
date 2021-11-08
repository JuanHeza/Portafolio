import React from 'react';
// import "./home.css";
import { Link } from "react-router-dom";

class Header extends React.Component {
    render(){
      return(
       <header className="header">
          {/* <div className="main-banner">
               <img loading="lazy" src="./img/background.jpg" alt="Banner" />
          </div> */}
          <div className="nav-bar title">
            <Link to="/Home">
              <span className="name">Juan Heza</span>
            </Link>
            <nav className="nav-bar-options">
              <ul>
                <li>
                  <Link to="/List/Projects">Projects</Link>
                </li>
                <li>
                  <Link to="/List/Blog">Blog</Link>
                </li>
                <li>
                  <Link to="/List/Skills">Skills</Link>
                </li>
                <li>
                  <Link to="/About">About</Link>
                </li>
                <li>
                  {/* <Link to="/Contact">Contact</Link> */}
                </li>
                  {/* <li onClick={this.props.function}>Theme</li> */}
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
            {/* <div>phone</div> */}
            <div>telegram</div>
            <div>replit</div>
            <div>email</div>
            {/* <div>instagram</div> */}
          </div>
          <p> Developed By <span className="title"><i>Future Star</i></span></p>
        </footer>
      )
    }
  }

export {Header, Footer}
