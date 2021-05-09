import { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import 'bootstrap';
import './App.scss';
import NavBar from './components/navBar';
import NominationList from './components/nominationList';
import Landing from './components/landing';
import NominationsDone from './components/nominationsDone';
import Footer from './components/footer';

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
        <Footer />
      </Router>
    )
  };
};
export default App;
