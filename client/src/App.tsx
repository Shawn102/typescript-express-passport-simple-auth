import React, { useContext} from 'react';
import Navbar from './Components/Navbar/Navbar';
import Homepage from './Components/Home/Homepage';
import Loginpage from './Components/Login/Loginpage';
import "./GlobalStyles.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='/' element={<Homepage />} />
      <Route path='/login' element={<Loginpage />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
