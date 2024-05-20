// import React from 'react'

import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Login from "./screen/Login";
// import Auth from "./Components/Auth";
import SignUp from "./screen/SignUp";
import Home from "./screen/Home";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
    // <Login />
  );
};

export default App;
