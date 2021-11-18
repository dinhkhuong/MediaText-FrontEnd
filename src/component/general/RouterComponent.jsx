import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import FooterComponent from '../header_footer/FooterComponent'
import SearchComponent from './SearchComponent'
import HeaderComponent from '../header_footer/HeaderComponent'
import TextRegistryComponent from '../TextMedia/TextRegistryComponent'
import UpdateTextComponent from '../TextMedia/UpdateTextComponent'
import AddText from '../TextMedia/AddText'

import LoginComponent from '../security/LoginComponent'
import LogoutComponent from '../security/LogoutComponent'
import AuthenticatedRoute from './AuthenticatedRoute'

class RouterComponent extends Component {
    render() {

        
        return(
            <div>
                <Router>
                    <HeaderComponent />
                        <Switch>
                            {/* <Route exact path="/"><WelcomeComponent name="Everett"/></Route>    */}

                            <Route path="/" exact component={LoginComponent} />
                            <Route path="/login" exact component={LoginComponent} />
                            <AuthenticatedRoute path="/logout" exact component={LogoutComponent}/>


                            <Route path="/search/:content" component= {SearchComponent} />                    
                            <Route path="/theText/:id" component={AddText} />
                            <Route path="/text/:id/:content" component={UpdateTextComponent} />
                            <AuthenticatedRoute path="/TextRegistry" exact component={TextRegistryComponent} />
                        </Switch>
                    <FooterComponent /> 
                </ Router>
            </div>
       )
   } 
}

export default RouterComponent; 
