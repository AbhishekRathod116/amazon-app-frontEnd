import React from 'react'
import Header from "./Header"
import Home from "./Home"
import CheckOut from "./CheckOut"
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import "./App.css"

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<><Header />  <Home/></>}/>
          <Route path="/checkOut" element={<><Header/> <CheckOut/></>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
