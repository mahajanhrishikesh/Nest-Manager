import {
  Routes,
  Route
} from "react-router-dom";

// Styles
import './reset.css';
import './App.css';

// Components
import Navigation from './components/Navigation';
import Footer from './components/Footer';

// Pages
import Home from './components/Home';
import Gallery from './components/Gallery';
import Floorplans from './components/Floorplans';
import Application from './components/Application';
import Contact from './components/Contact';


function App() {
  return (
    <div className="App">
      <Navigation />
        <Routes>
          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/gallery">
            <Gallery />
          </Route>

          <Route path="/floorplans">
            <Floorplans />
          </Route>

          <Route path="/apply">
            <Application />
          </Route>

          <Route path="/contact">
            <Contact />
          </Route>
        </Routes>
      <Footer />
    </div>
  );
}

export default App;