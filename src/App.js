import React from 'react';
import './App.css';
import Navbar from './components/navbar';
import { BrowserRouter as Router} from 'react-router-dom';
import CartWidget from './components/cartWidget';


function App() {
  return (
    <>
    <Router>
        <Navbar />
    </Router>
    < CartWidget />
    </>
  );
}

export default App;
