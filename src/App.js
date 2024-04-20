import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Projects from './Projects'
import Navbar from './Navbar';
import './App.css';


function App() {
  
  return (


    <div>

         <Router>

             <Navbar/>

             <Routes>
                   
                  <Route path='/' element={<Home />} />
                  <Route path='/about' element={<About />} />
                  <Route path='/contact' element={<Contact />} />
                  <Route path='/projects' element={<Projects />} />

             </Routes>

         </Router>

    </div>


  );
}

export default App;
