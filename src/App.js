// import logo from './logo.svg';
import './style.css';
import './fonts.css';
import './devicon.min.css';

import React, { useState } from 'react';
// import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// import { lightTheme, darkTheme } from './components/presentation/theme';
// import { GlobalStyles } from './components/presentation/global';

import {Header, Footer} from "./components/presentation/header-footer"
import Home from "./components/presentation/home"
import Loading from "./components/presentation/loading"
import ProjectList from './components/presentation/ProjectList'
import About from './components/about/about'

function App() {
  
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }

  return (
    // <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      // <>
        /* <GlobalStyles /> */
        <div className="App">
          <Router>
            <section className="Main">
              <Switch>
                <Route exact path="/">
                  <Loading />
                </Route>
                
                <Route exact path="/Home">
                  <Header function={toggleTheme}/>
                  <Home />
                  <Footer />
                </Route>
                
                <Route path="/List/Projects">
                  <Header function={toggleTheme}/>
                  <ProjectList />
                  <Footer />
                </Route>
                
                <Route path="/List/Blog">
                  <Header function={toggleTheme}/>
                  Blog
                  <Footer />
                </Route>
                
                <Route path="/List/Skills">
                  <Header function={toggleTheme}/>
                  Skills
                  <Footer />
                </Route>
                
                <Route path="/About">
                  <Header function={toggleTheme}/>
                  <About />
                  <Footer />
                </Route>
                
                <Route path="/Contact">
                  <Header function={toggleTheme}/>
                  Contact
                  <Footer />
                </Route>
              </Switch>
            </section>
          </Router>
        </div>
      // </>
    // </ThemeProvider>
  );
}

export default App;
