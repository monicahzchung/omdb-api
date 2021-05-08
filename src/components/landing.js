import { Component } from 'react';
import { connect } from 'react-redux';
import SearchBox from './searchBox';
import MovieResults from './movieResults';
import Slogan from './slogan'
import 'bootstrap';

class Landing extends Component {
    render(){
        return(
            <>
                <Slogan />
                <div className='container'>
                    <SearchBox />
                    <MovieResults />
                </div>
                
            </>
        )
    }
};

const mapStateToProps = state => {
    return {
        nominations: state.userList.nominations
    };
};

export default connect(mapStateToProps, null)(Landing);