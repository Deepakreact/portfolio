
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import HomePage from './Components/HomePage';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import MenuIcon from '@material-ui/icons/Menu';
//import WhatsAppWidget from 'react-whatsapp-widget'
//import 'react-whatsapp-widget/dist/index.css'

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <div className="left">
            <img src="logo2.png" alt="" className="logo"></img>

          </div>
          <div className="right">
            <ul className="site-links">
          
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

  {/*<WhatsAppWidget phoneNumber='+919358358575' companyName='TechDeepak'/>*/}
        <div className="footer">
        <p>@Copyright Created & Developed By Deepak Sharma</p>
        
        </div>




      </div>
    </Router>
  );
}

export default App;
