import React from 'react';
import './App.css';
import Navbar from './PortfolioContainer/Navbar/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './PortfolioContainer/Home/Home';
import About from './PortfolioContainer/AboutMe/About';
import Contact from './PortfolioContainer/ContactMe/Contact';
import Resume from './PortfolioContainer/Resume/Resume';
import Project from './PortfolioContainer/Projects/Project';




function App() {
  return (
    
    <div className="App">
      <Router>
        <Navbar/>
           <Switch> 
              <Route exact path='/'component={Home}> 
                <Home/>
              </Route>

              <Route path='/about' component={About} exact>   
                <About/>
              </Route>

              <Route path='/resume'component={Resume} exact>   
                <Resume/>
              </Route>
 
              <Route path='/project'component={Project} exact>    
                <Project/>
              </Route>

              <Route path='/contact'component={Contact} exact>    
                <Contact/>
              </Route>
          </Switch>
      </Router> 
        
    </div>
  
  );
}

export default App;
