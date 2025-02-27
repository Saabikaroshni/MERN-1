import { useRef, useState, useEffect } from "react";
const UseRef = () => {
  var [text, setText] = useState("");
  var previousrender = useRef();
  useEffect(() => {
    previousrender.current = text;

  }, [text]);
  return (
    <div>
      <h1>This is useRef example</h1>
      Type your text :{" "}
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <h2>This is current render is {text}</h2>
      <h2>This is previous  render is {previousrender.current}</h2>
    </div>
  );
};
export default UseRef;
