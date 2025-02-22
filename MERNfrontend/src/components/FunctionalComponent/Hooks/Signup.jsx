import {Link} from 'react-router-dom'
function Signup() {
  return (
    <div>
      <form>
        <table>
          <tbody>
            <tr>
              <td><label htmlFor="firstName">First name:</label></td>
              <td><input type="text" placeholder="Enter first name" required /></td>
            </tr>
            <tr>
              <td><label htmlFor="lastName">Last name:</label></td>
              <td><input type="text" placeholder="Enter Last name" required /></td>
            </tr>
            <tr>
              <td><label htmlFor="email">Email:</label></td>
              <td><input type="email" placeholder="Enter your email" defaultValue="@sjit.ac.in" required /></td>
            </tr>
            <tr>
              <td><label htmlFor="cnfPassword">Confirm Password:</label></td>
              <td><input type="password" placeholder="Enter your Password" required /></td>
            </tr>
            <tr>
              <td><label htmlFor="dob">Date of Birth:</label></td>
              <td><input type="date" required /></td>
            </tr>
            <tr>
              <td><label htmlFor="phone">Mobile number:</label></td>
              <td><input type="tel" placeholder="Enter your Phone number" required /></td>
            </tr>
            <tr>
              <td><label>Gender:</label></td>
              <td>
                <input type="radio" name="Gender" value="Male" /> Male
                <input type="radio" name="Gender" value="Female" /> Female
                <input type="radio" name="Gender" value="Others" /> Others
              </td>
            </tr>
            <tr>
          
              <td><button type="submit"><Link to='/login'>Sign Up</Link></button></td>
            </tr>
          </tbody>
        </table>
      </form>
      <p style={{textAlign:"left"}}>
        Already have an account? <Link to='/login'>Login</Link>
      </p>
    </div>
  );
}
export default Signup;
