import React from 'react';
import './App.css';
import Navbar from './components/navbar';
import { BrowserRouter as Router} from 'react-router-dom';
import CartWidget from './components/cartWidget';
import ItemsListContainer from './components/itemsListContainer'


function App() {
  return (
    <>
    <Router>
        <Navbar />
    </Router>
    < CartWidget />
    <ItemsListContainer producto="1" precio="$ 10"/>
    <ItemsListContainer producto="2" precio="$ 11"/>
    <ItemsListContainer producto="3" precio="$ 12"/>
    <ItemsListContainer producto="4" precio="$ 13"/>
    </>
  );
}

export default App;
