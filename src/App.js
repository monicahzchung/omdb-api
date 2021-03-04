import { Component } from 'react';
import SearchBox from './components/searchBox';
import MovieResults from './components/movieResults';

class App extends Component {
  render(){
    return (
      <div className='container'>
        <SearchBox />
        <MovieResults />
      </div>
    )
  };
};
export default App;
