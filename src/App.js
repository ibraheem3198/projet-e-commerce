
import React from 'react';
import {BrowserRouter as Router, Routes} from 'react-router-dom'
import Header from './components/Header'
import Section from './components/Section'
import {DataProvider} from './components/Context'
import Cart from './components/Cart/Cart';
 
class App extends React.Component{
  render(){
    return(
      <DataProvider>
      <div className='app'>
        <Router>
            <Header />
           <Section /> 
        </Router>
      </div>
      </DataProvider>
    );
  }
 }


export default App;