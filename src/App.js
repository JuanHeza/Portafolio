// import logo from './logo.svg';
import './App.css';
import './animations.css';
import './fonts.css';
import './devicon.min.css';

import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { lightTheme, darkTheme } from './components/presentation/theme';
import { GlobalStyles } from './components/presentation/global';

import {Header, Footer, Home} from "./components/presentation/home"
import Loading from "./components/presentation/loading"
import ProjectList from './components/presentation/ProjectList'

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
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <>
        <GlobalStyles />
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
                </Route>
                
                <Route path="/List/Projects">
                  <Header function={toggleTheme}/>
                  <ProjectList />
                </Route>
                
                <Route path="/List/Posts">
                  <Header function={toggleTheme}/>
                  Post
                </Route>
                
                <Route path="/List/Skills">
                  <Header function={toggleTheme}/>
                  Skills

                  ReacT
                </Route>
                
                <Route path="/About">
                  <Header function={toggleTheme}/>
                  About
                </Route>
                
                <Route path="/Contact">
                  <Header function={toggleTheme}/>
                  Contact
                </Route>
              </Switch>
              <Footer />
            </section>
          </Router>
        </div>
      </>
    </ThemeProvider>
  );
}

export default App;
