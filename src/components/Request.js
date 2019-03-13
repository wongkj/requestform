import React, { Component } from 'react';

export default class Request extends Component {
  render() {
    const {id, title, user, email} = this.props.request;
    return (
      <div>
        <div class="card">
            <div class="card-header">
                {title}
            </div>
            <div class="card-body">
                <h4 class="card-title">User</h4>
                <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, perspiciatis.</p>
                <a class="btn btn-danger" href="#">Read More</a>
            </div>
        </div>   
      </div>
    )
  }
}
