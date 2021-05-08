import { Component } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap';
import logo from '../theshoppies.png';

class NavBar extends Component {
    render(){
        return (
            <nav className="navbar">
                    <Link to={'/'}><img src={logo} width='210' height='60'></img></Link> 
                    <Link to={'/nominations'}>Your Nominations</Link>
            </nav>
        )
    };
};

export default NavBar; 