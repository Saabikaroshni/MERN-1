import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from "./components/FunctionalComponent/Home"
import About from "./components/FunctionalComponent/About"
import Contact from "./components/FunctionalComponent/Contact"
import Gallery from "./components/FunctionalComponent/Gallery"
import Signup from "./components/FunctionalComponent/Signup"
import ClassCompEg from './components/classcomponent/ClassComponentEG'
import Navbar from "./components/FunctionalComponent/Navbar"
import {BrowserRouter,Routes,Route} from 'react-router-dom'

function App() {
  return (

      <main>
          <BrowserRouter>
            <Navbar></Navbar>
            <Routes>
              <Route path='/' element={<Home properties="hello," sjit="SJIT"></Home>}></Route>
              <Route path='./components/FunctionalComponent/About.jsx' element={<About></About>}></Route>
              <Route path='/' element={<Contact></Contact>}></Route>
              <Route path='/' element={<Gallery></Gallery>}></Route>
              <Route path='/' element={<Signup></Signup>}></Route>
            </Routes>

          </BrowserRouter>
        
          
      </main>
      

  )
}

export default App
