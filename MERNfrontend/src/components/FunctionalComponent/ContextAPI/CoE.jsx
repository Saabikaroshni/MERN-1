import { createContext } from "react";
import React from 'react'
import Exam from "./Exam";
import StudentResults from "./StudentResults";
export const ResPub = createContext();
const CoE = () => {
  return (
    <ResPub.Provider value={{sgpa:"10 SGPA", cgpa:"10 CGPA"}}>
      <Exam></Exam>
      <h1>Result Published.</h1>
      <StudentResults></StudentResults>
    </ResPub.Provider>
  )
}

export default CoE