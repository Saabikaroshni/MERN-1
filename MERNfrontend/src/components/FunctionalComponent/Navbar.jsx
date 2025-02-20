import '../css/Navbar.css'
import '../css/Dropdown.css'
import {Link} from 'react-router-dom'
import {useState} from 'react';
const Navbar = () =>{
    var [dropdown,showDropdown]=useState(false);
    return(
        <header>
            <nav>
                <li><Link to='/' className="link">Home</Link></li>
                <li><Link to='/About' className="link">About</Link></li>
                <li><Link to='/Gallery' className="link">Gallery</Link></li>
                
                <div className="dropdown0" onMouseEnter={()=>showDropdown(true)} onMouseLeave={()=>showDropdown(false)}>
                <span className="link">Hooks</span>
                {dropdown && (
                    <ol className="dropdown1">
                        <li><Link to='use-state' className="link">useState</Link></li>
                        <li><Link to='use-effect' className="link">useEffect</Link></li>
                        <li><Link to='use-effect-api' className="link">useEffectAPI</Link></li>
                        <li><Link to='use-ref' className="link">useRef</Link></li>
                        <li><Link to='use-memo' className="link">useMemo</Link></li>
                    </ol>
                )}
                </div>
                <li><Link to='/Contact' className="link">Contact</Link></li>
                <li><Link to='/Signup' className="link">Signup</Link></li>
                
                
            </nav>
        </header>
    )
}
export default Navbar;
