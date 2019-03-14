import React, { Component } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css' // Import css

class Request extends Component {
    state = {
        showRequest: false
    }
    onHeaderClick = () => {
        // Change done
        this.setState({ showRequest: !this.state.showRequest })
    }
    onDeleteClick = () => {
        this.props.deleteClickHandler();
    }
    confirmDelete = () => {
        confirmAlert({
          title: 'Confirm',
          message: 'Are you sure you want to delete this request?',
          buttons: [
            {
              label: 'Yes',
              onClick: () => this.onDeleteClick()
            },
            {
              label: 'No'
            }
          ]
        })
      };    
  render() {
    const {id, title, user, email, team, details, urgency} = this.props.request;
    const { showRequest } = this.state;
    return (
      <div>
        <div className="card">
            <div 
                style={{ "cursor": "pointer" }}
                onClick={this.onHeaderClick} 
                className={classnames('card-header', { 'bg-warning text-light': urgency == 'Low' }, { 'bg-primary text-light': urgency == 'Medium' }, { 'bg-danger text-light': urgency == 'High' })}
            >
                {title}
                <i 
                    className="fas fa-times shadow"
                    style={{ float: "right", "borderRadius": '0.2em', padding: '0.4em' }}
                    onClick={this.confirmDelete}
                    data-toggle="modal" data-target="#myModal"
                ></i>
            </div>
            {showRequest ? 
                (
                    <div className="card-body">
                        <div className="row">
                            <div className="col-sm-6 col-md-4 col-lg-3 col-xl-2">
                                <h4 className="card-title">{user}</h4>
                                <p className="card-text">{email}</p>    
                                <p className="card-text">{team}</p>     
                            </div>
                            <div className="col-sm-6 col-md-8 col-lg-9 col-xl-10">
                                <p className="card-text">{details}</p>
                            </div>
                        </div>                        

                    </div>
                ) : null}
        </div>   

      </div>
    )
  }
}

Request.proptTypes = {
    request: PropTypes.object.isRequired,
    deleteClickHandler: PropTypes.func.isRequired
}

export default Request;