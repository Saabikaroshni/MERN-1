import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from "./components/FunctionalComponent/Home"
import About from "./components/FunctionalComponent/About"
import Form from "./components/FunctionalComponent/Form"
import Gallery from "./components/FunctionalComponent/Gallery"
import Skills from "./components/FunctionalComponent/Skills"

function App() {
  return (
      <div>
         <h1>Welcome to React</h1>
         <Home></Home>
         <About></About>
         <Form></Form>
         <Gallery></Gallery>
         <Skills></Skills>
      </div>
  )
}

export default App
