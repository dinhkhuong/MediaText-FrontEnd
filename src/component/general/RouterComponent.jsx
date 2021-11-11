import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import FooterComponent from '../header_footer/FooterComponent'
import WelcomeComponent from './WelcomeComponent'
import HeaderComponent from '../header_footer/HeaderComponent'
import TextRegistryComponent from '../employee/TextRegistryComponent'
import UpdateTextComponent from '../employee/UpdateTextComponent'
import AddText from '../employee/AddText'

class RouterComponent extends Component {
   render() {
       return(
           <div>
            <Router>
                <HeaderComponent />
                    <Switch>
                        <Route exact path="/"><WelcomeComponent name="Everett"/></Route>                       
                        <Route path="/theText/:id" component={AddText} />
                        <Route path="/text/:id/:content" component={UpdateTextComponent} />
                        <Route path="/TextRegistry" exact component={TextRegistryComponent} />
                    </Switch>
                <FooterComponent /> 
            </ Router>
            </div>
       )
   } 
}

export default RouterComponent; 
