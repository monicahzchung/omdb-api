import { Component } from 'react';
import { connect } from 'react-redux';
import SearchBox from './searchBox';
import MovieResults from './movieResults';

class Landing extends Component {
    render(){
        return(
            <>
                <SearchBox />
                <MovieResults />
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