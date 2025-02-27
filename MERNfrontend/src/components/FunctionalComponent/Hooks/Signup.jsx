import {Link} from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useState } from "react";
function Signup() {
  const navigate=useNavigate()
  const [firstName,setFN]=useState("");
  const [lastName,setLN]=useState("");
  const [password,setpass]=useState("");
  const [email,setemail]=useState("");
  const [phoneNumber,setnum]=useState(0);
  const handlesignup =async (event)=>{
    event.preventDefault()
    const req=await axios.post("https://mern-1-w5us.onrender.com/signup",{
      firstName:firstName,lastName:lastName,email:email,password:password,phoneNumber:phoneNumber
    });
    const message=req.data.message
    const isSignup = req.data.isSignUp; 
    if(isSignup){
      alert(message)
      navigate("/login")
    }
    else{
      alert(message)
    }

  };
  return (
    <div>
      <form onSubmit={handlesignup}>
        <table>
          <tbody>
            <tr>
              <td><label htmlFor="firstName">First name:</label></td>
              <td><input type="text"  id="firstName" value={firstName} onChange={e=>setFN(e.target.value)} placeholder="Enter first name" required /></td>
            </tr>
            <tr>
              <td><label htmlFor="lastName">Last name:</label></td>
              <td><input type="text"id="lastName"  value={lastName} onChange={e=>setLN(e.target.value)} placeholder="Enter Last name" required /></td>
            </tr>
            <tr>
              <td><label htmlFor="email">Email:</label></td>
              <td><input type="email" id="email" value={email} onChange={e=>setemail(e.target.value)} placeholder="Enter your email" defaultValue="@sjit.ac.in" required /></td>
            </tr>
            <tr>
              <td><label htmlFor="cnfPassword">Password:</label></td>
              <td><input type="password" id="password" value={password} onChange={e=>setpass(e.target.value)} placeholder="Enter your Password" required /></td>
            </tr>
            {/* <tr>
              <td><label htmlFor="dob">Date of Birth:</label></td>
              <td><input type="date" required /></td>
            </tr> */}
            <tr>
              <td><label htmlFor="phone">Mobile number:</label></td>
              <td><input type="tel" id="phoneNumber" value={phoneNumber} onChange={e=>setnum(e.target.value)} placeholder="Enter your Phone number" required /></td>
            </tr>
            {/* <tr>
              <td><label>Gender:</label></td>
              <td>
                <input type="radio" name="Gender" value="Male" /> Male
                <input type="radio" name="Gender" value="Female" /> Female
                <input type="radio" name="Gender" value="Others" /> Others
              </td>
            </tr> */}
            <tr>
          
              <td><button type="submit">signup</button></td>
              {/* //<Link to='/login'>Sign Up</Link> */}
            </tr>
          </tbody>
        </table>
      </form>
      {/* <p style={{textAlign:"left"}}>
        Already have an account? <Link to='/login'>Login</Link>
      </p> */}
    </div>
  );
}
export default Signup;
