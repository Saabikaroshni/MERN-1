import React from 'react'
import {Link} from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useState } from "react";
function login(){
    const navigate=useNavigate()
    const [password,setpass]=useState("");
    const [email,setemail]=useState("");
    return(
       <div>
           <form>
                <table>
                    <tbody>
                        <tr>
                            <td><label htmlFor="email">Email:</label></td>
                            <td><input type="email" placeholder="Enter your email" required /></td>
                        </tr>
                        <tr>
                            <td><label htmlFor="cnfPassword">Confirm Password:</label></td>
                            <td><input type="password" placeholder="Enter your Password" required /></td>
                        </tr>
                        <tr>
                            <td><button type="submit">Log in</button></td>
                        </tr>
                    </tbody>
                </table>
            </form>
            <p>
         Don't have an account? 
      </p>
      <td><Link to='/Signup'>Sign Up</Link></td>
       </div>
    )
}
export default login; 