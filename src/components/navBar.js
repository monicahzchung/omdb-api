import { Component } from 'react';
import { Link} from 'react-router-dom';
import 'bootstrap';

class NavBar extends Component {
    render(){
        return (
            <>
                <nav className="navbar navbar-light bg-light">
                    <Link to={'/'}><h1>The Shoppies</h1></Link> 
                    <Link to={'/nominations'}>Your Nominations</Link>
                </nav>
            </>
        )
    }
};

export default NavBar; 