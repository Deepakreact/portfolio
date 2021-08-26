
import './App.css';
import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom'
import HomePage from './Components/HomePage';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import MenuIcon from '@material-ui/icons/Menu';

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <div className="left">
            <img src="logo3.png" alt="" className="logo"></img>

          </div>
          <div className="right">
            <ul className="site-links">
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/portfolio">Portfolio</Link>
              <Link to="/contact">Contact</Link>
            </ul>
            <ul className="social-links">
              <a href="/"><FacebookIcon /></a>
              <a href="/"><InstagramIcon /></a>
              <a href="/"><LinkedInIcon /></a>

            </ul>

          </div>
          <button className="menu-btn"><MenuIcon /></button>

        </header>
        <Switch>
          <Route path="/" exact component={HomePage} />


        </Switch>



      </div>
    </Router>
  );
}

export default App;
