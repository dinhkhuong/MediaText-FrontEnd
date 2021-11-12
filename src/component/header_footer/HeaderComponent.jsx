import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class HeaderComponent extends Component {
    render() {
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
                </nav>
            </header>
        )
    }
}
export default HeaderComponent; 