import { Routes, Route } from "react-router-dom";

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
          {/* <Route path='/welcome' element={<Home/>} /> */}
          <Route path="/" element = {<Home/>}  />
          <Route path="/gallery" element = {<Gallery/>}  />
          <Route path="/floorplans" element = {<Floorplans/>}  />
          <Route path="/apply" element = {<Application />}  />
          <Route path="/contact" element = {<Contact />}  />
        </Routes>
      <Footer />
    </div>
  );
}

export default App;