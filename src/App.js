
import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom'
import Header from './components/Header'
import Section from './components/Section'
/*import Cart from './components/Cart/Cart'*/

 
class App extends React.Component{
  render(){
    return(
      
      <div className='app'>
        <Router>
            <Header />
           <Section /> 
        </Router>
      </div>
    
    );
  }
 }


export default App;