import LoginForm from "./components/pages/login";
import "./reset.scss";
import "./App.scss";
import React from "react";
import Home from "./components/pages/home";
import Navbar from "./components/navbar/navbar";
import Profile from "./components/pages/profile";
import { ApolloClient, ApolloProvider } from "@apollo/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
          <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/Listing" element={"listing-page"} />
          <Route path="/login" element={<LoginForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
