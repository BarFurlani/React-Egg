import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./component/public/Footer";
import Main from "./component/public/Main";
import Navbar from "./component/public/Navbar";
import Detail from './component/public/Detail';
import UserForm from './component/public/UserForm';

function App() {
  return (
    <Router>
      <div>
        <Navbar/>
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route path="/details/:id" element={<Detail/>} />
          <Route exact path="/user-form" element={<UserForm/>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
