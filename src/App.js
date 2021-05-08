import { Component } from 'react';
import { HashRouter as Router, Route} from 'react-router-dom';
import 'bootstrap';
import NavBar from './components/navBar';
import NominationList from './components/nominationList';
import Landing from './components/landing';
import NominationsDone from './components/modal';

class App extends Component {
  render(){
    return (
      <Router>
        <NavBar />
        <div className='container'>
          <NominationsDone />
          <Route exact path='/' component ={Landing} />
          <Route exact path='/nominations' component={NominationList} />
        </div>
      </Router>
    )
  };
};
export default App;
