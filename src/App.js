import React from 'react';
import './App.css';
import Navbar from './PortfolioContainer/Navbar/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './PortfolioContainer/Home/Home';
import Footer from './PortfolioContainer/Home/Footer/Footer';
import About from './PortfolioContainer/AboutMe/About';
import Contact from './PortfolioContainer/ContactMe/Contact';



function App() {
  return (
    
    <div className="App">
      <Router>
        <Navbar/>
          <Switch>
              <Route exact path='/'>
              <Home/>
              </Route>

              <Route path='/about'>   
              <About/>
              </Route>

              <Route path='/contact'>   
              <Contact/>
              </Route>
          </Switch>
      </Router> 
        
    </div>
  
  );
}

export default App;
