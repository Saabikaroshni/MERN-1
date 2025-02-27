
import{memo,useState} from "react";
const Num = () => {
  var [number,setNum]=useState(0);
  return (
    <div><h1>Number</h1>
    <input type="number" value={number} onChange={(e)=>setNum(e.target.value)} />
    <h3>The number is {number}</h3>
    </div>
  )
}

export default memo(Num);