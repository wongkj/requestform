import React, { Component } from 'react';

export default class Header extends Component {
  render() {
    return (
    <React.Fragment>
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-3">
            <div className="container">
                <a className="navbar-brand" href="#">Request Eform</a>
                <ul className="navbar-nav">
                    <li className="navbar-item">
                        <a className="nav-link" href="#">Home</a>
                    </li>
                    <li className="navbar-item">
                        <a className="nav-link" href="#">About</a>
                    </li>
                </ul>
            </div>
        </nav>      
    </React.Fragment>  
    )
  }
}
