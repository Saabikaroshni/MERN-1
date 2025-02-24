import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Home from "./components/FunctionalComponent/Home";
import About from "./components/FunctionalComponent/About";
import Contact from "./components/FunctionalComponent/Contact";
import Gallery from "./components/FunctionalComponent/Gallery";
import Signup from "./components/FunctionalComponent/Hooks/Signup";
import Login from "./components/FunctionalComponent/Loginpage"
import ClassCompEg from "./components/classcomponent/ClassComponentEG";
import Navbar from "./components/FunctionalComponent/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UseEffect from "./components/FunctionalComponent/Hooks/UseEffect";
import UseState from "./components/FunctionalComponent/Hooks/UseState"
import UseEffectAPI from "./components/FunctionalComponent/Hooks/UseEffectAPI"
import UseRef from "./components/FunctionalComponent/Hooks/UseRef"
import UseMemo from "./components/FunctionalComponent/Hooks/UseMemo"
import UseCallback from "./components/FunctionalComponent/Hooks/UseCallback"
import UseMemoize from "./components/FunctionalComponent/Hooks/UseMemoize"
import HoC from "./components/FunctionalComponent/HOC/HoC";
import Memo from "./memoization/Memo";
import LazyLoadingAndSuapense from "./memoization/LazyLoadingAndSuapense";
import Text from "./memoization/Text";
import Num from "./memoization/Num";

import CoE from "./components/FunctionalComponent/ContextAPI/CoE";
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
          <Route path="/use-state" element={<UseState></UseState>}></Route>
          <Route path="/use-effect-api" element={<UseEffectAPI></UseEffectAPI>}></Route>
          <Route path="/use-ref" element={<UseRef></UseRef>}></Route>
          <Route path="/use-memo" element={<UseMemo></UseMemo>}></Route>
          <Route path="/use-callback" element={<UseCallback></UseCallback>}></Route>
          <Route path="/use-memoize" element={<UseMemoize></UseMemoize>}></Route>
          <Route path="/hoc" element={<HoC></HoC>}></Route>
          <Route path="/memo" element={<Memo></Memo>}></Route>
          <Route path="/lazy" element={<LazyLoadingAndSuapense></LazyLoadingAndSuapense>}></Route>
          <Route path="/Gallery" element={<Gallery></Gallery>}></Route>
          <Route path="/Signup" element={<Signup></Signup>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/Text" element={<Text></Text>}></Route>
          <Route path="/coe" element={<CoE></CoE>}></Route>
          <Route path="/number" element={<Num></Num>}></Route>
          
          
         
         
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
