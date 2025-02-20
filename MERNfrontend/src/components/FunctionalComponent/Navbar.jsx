import '../css/Navbar.css'
import '../css/Dropdown.css'
import {Link} from 'react-router-dom'
import {useState} from 'react';
const Navbar = () =>{
    var [dropdown,showDropdown]=useState(false);
    return(
        <header>
            <nav>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/About'>About</Link></li>
                <li><Link to='/Gallery'>Gallery</Link></li>
                
                <div className="dropdown0" onMouseEnter={()=>showDropdown(true)} onMouseLeave={()=>showDropdown(false)}>
                <span>Hooks</span>
                {dropdown && (
                    <ol className="dropdown1">
                        <li><Link to='use-state'>useState</Link></li>
                    <   li><Link to='use-effect'>useEffect</Link></li>
                    </ol>
                )}
                </div>
                <li><Link to='/Contact'>Contact</Link></li>
                <li><Link to='/Signup'>Signup</Link></li>
                
                
            </nav>
        </header>
    )
}
export default Navbar;
