import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import AuthenticationService from '../../service/AuthenticationService';

class HeaderComponent extends Component {
    render() {
        const isUserLoggedIn = AuthenticationService.isUserLoggedIn();
        return(
            <header>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark ">
                    <ul className=" navbar-nav ">
                        {/* <h3><Link className="nav-link" to="/">Home</Link></h3> */}
                        
                        <h3><Link className="nav-link" to="/TextRegistry">Text Registry</Link></h3>
                        
                          
                        {/* <form className="d-flex " onSubmit={this.handleSubmit}>
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
                            <button classNAme="btn btn-outline-success" type="submit">Search</button>
                        </form> */}
                        
                        
                        
                    </ul>

                    <ul className="navbar-nav navbar-collapse justify-content-end">
                        {!isUserLoggedIn && <h4><Link className="nav-link" to="/login">Login</Link></h4>}
                        {isUserLoggedIn && <h4><Link className="nav-link" to="/logout" onClick={AuthenticationService.logout}>Logout</Link></h4>}
                        
                        </ul>
                </nav>
            </header>
        )
    }
}

export default withRouter(HeaderComponent); 