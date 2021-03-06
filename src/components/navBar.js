import { Link } from 'react-router-dom';
import 'bootstrap';
import logo from '../theshoppies.png';

const NavBar = () => {
    return (
        <nav className="navbar sticky-top">
                <Link to={'/'}><img src={logo} width='210' height='60'></img></Link> 
                <Link to={'/nominations'}>
                    <div className='nominationsNav'>Your Nominations</div>
                </Link>
        </nav>
    )   
};

export default NavBar; 