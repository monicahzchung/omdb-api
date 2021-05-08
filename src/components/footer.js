import { Component } from 'react';

class Footer extends Component {
    render(){
        return (
            <nav className="navbar">
                <div className='footer'>
                    <a href='https://www.omdbapi.com/'>
                        <h5>Powered by OMDB API</h5>
                    </a>
                </div>
            </nav>
        )
    }
}

export default Footer;