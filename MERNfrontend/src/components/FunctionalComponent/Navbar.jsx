import '../css/Navbar.css'
import '../css/Dropdown.css'
import {Link} from 'react-router-dom'
import {useState} from 'react';
const Navbar = () =>{
    var [dropdown,showDropdown]=useState(false);
    var [dropdownnew,showDropdownnew]=useState(false);
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
                        <li><Link to='use-callback' className="link">useCallback</Link></li>
                        <li><Link to='use-memoize' className="link">useMemoize</Link></li>
                    </ol>
                )}
                </div>
                <div className="dropdown0" onMouseEnter={()=>showDropdownnew(true)} onMouseLeave={()=>showDropdownnew(false)}>
                <span className="link">Memoization</span>
                {dropdownnew &&(
                    <ol className='dropdown1'>
                        <li><Link to='/memo' className="link">Memo</Link></li>
                        <li><Link to='/Text' className="link">Text</Link></li>
                        <li><Link to='/number' className="link">Number</Link></li>
                        <li><Link to='/lazy' className="link">Lazy</Link></li>

                    </ol>
                )}
                </div>
                <li><Link to='/hoc' className="link">HOC</Link></li>
                <li><Link to='/Signup' className="link">Signup</Link></li>
                
                
            </nav>
        </header>
    )
}
export default Navbar;
