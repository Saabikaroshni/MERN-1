import React from 'react'
import{memo,useState} from "react";
const Text = () => {
    var [text,setText]=useState("");
  return (
    <div>
        <h1>Text</h1>
        <input type="text" value={text} onChange={(e)=>setText(e.target.value)} />
        <h3>The test is {text}</h3>

    </div>
  )
}

export default memo(Text);