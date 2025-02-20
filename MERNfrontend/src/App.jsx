import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Home from "./components/FunctionalComponent/Home";
import About from "./components/FunctionalComponent/About";
import Contact from "./components/FunctionalComponent/Contact";
import Gallery from "./components/FunctionalComponent/Gallery";
import Signup from "./components/FunctionalComponent/Signup";
import Login from "./components/FunctionalComponent/Loginpage"
import ClassCompEg from "./components/classcomponent/ClassComponentEG";
import Navbar from "./components/FunctionalComponent/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UseEffect from "./components/FunctionalComponent/Hooks/UseEffect";
import login from "./components/FunctionalComponent/Loginpage";

function App() {
  return (
    <main>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={<Home properties="hello," sjit="SJIT"></Home>}
          ></Route>
          <Route path="/About" element={<About></About>}></Route>
          <Route path="/Contact" element={<Contact></Contact>}></Route>
          <Route path="/use-effect" element={<UseEffect></UseEffect>}></Route>
          <Route path="/Gallery" element={<Gallery></Gallery>}></Route>
          <Route path="/Signup" element={<Signup></Signup>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
         
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
