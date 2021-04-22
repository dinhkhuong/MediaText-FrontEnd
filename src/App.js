import React, { Component } from 'react';
import './bootstrap.css';
import './App.css';
import RouterComponet from './component/general/RouterComponent';

/*
  •	npm add axios
  •	npm add react-router-dom
  •	npm add formik 
*/

class App extends Component {
  render() {
    return (
      <div>
        <RouterComponet/> 
      </div>
    )
  }
}

export default App;
