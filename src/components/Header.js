import React, { Component } from 'react';

export default class Header extends Component {
  render() {
    return (
    <React.Fragment>
        <nav class="navbar navbar-expand-sm navbar-dark bg-dark mb-3">
            <div class="container">
                <a class="navbar-brand" href="#">Request Eform</a>
                <ul class="navbar-nav">
                    <li class="navbar-item">
                        <a class="nav-link" href="#">Home</a>
                    </li>
                    <li class="navbar-item">
                        <a class="nav-link" href="#">About</a>
                    </li>
                </ul>
            </div>
        </nav>      
    </React.Fragment>  
    )
  }
}
