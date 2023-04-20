import { useState } from "react";

import './App.css';


import { BrowserRouter as Router,Routes,Route } from "react-router-dom";



import LoginPage from "./Components/loginPage";
import Home from "./Components/Home";

const App = () => {
 return(
  
  <Router>
    <Routes>
      <Route path="/" element={<LoginPage/>}/>
      <Route path="/home" element={<Home />}>
       
      </Route>
    </Routes>
  </Router>
 )
};

export default App;
