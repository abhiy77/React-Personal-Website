import React from 'react';
import './App.css';
import Home from './components/pages/HomePage/Home';
import About from './components/pages/AboutPage/About';
import Contact from './components/pages/ContactPage/Contact';
import Gallery from './components/pages/GalleryPage/Gallery';
import { BrowserRouter as Router, Switch, Route ,Redirect} from 'react-router-dom';
import Navbar from './components/organisms/Navbar';
import Footer from './components/organisms/Footer';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({

  footer : {
    marginTop:'30px'
  }
});

function App() {

  const styles = useStyles();

  return (
    <Router>
      <Navbar />
      <Switch>

        <Route exact path="/">
          <Redirect to="/home" />
        </Route>

        <Route path='/home' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/contact' component={Contact} />
        <Route path='/gallery' component={Gallery} />
      </Switch>
      <br /> <br /> <br /> <br />
      <Footer className= {styles.footer}/>
    </Router>
  );
}

export default App;
