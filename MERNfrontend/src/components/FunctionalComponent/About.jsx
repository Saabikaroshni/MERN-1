import {useState} from 'react';
function About(){
    var initialVar =0
    var [num,setNum] = useState(initialVar)
    
    function handleDecrement(){
        setNum(num-1)
    }
    function handleIncrement(){
        setNum(num+1)
    }
    return(
       <div>
           <h1>About Page</h1>
           <h2>Sate initial value is {initialVar}</h2>
           <button onClick={handleDecrement}>-</button>
           <h3>Updating State:{num}</h3>
           {/*<button onClick={handleIncrement}>+</button>*/}
           <button onClick={() => setNum(num+1)}>+</button><hr></hr>
           <button onClick={()=> setNum(initialVar)}>RESET</button>
       </div>
    )
}
export default About;