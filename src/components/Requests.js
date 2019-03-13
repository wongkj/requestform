import React, { Component } from 'react';

import Request from './Request';

class Requests extends Component {
    state = {
        requests: [
            {
                id: 1,
                title: 'First Request',
                user: 'John Smith',
                email: 'jsmith@gmail.com'
            },
            {
                id: 2,
                title: 'Second Request',
                user: 'John Snow',
                email: 'jsnow@gmail.com'
            }            
        ]
    }
  render() {
    const { branding } = this.props;
    const { requests } = this.state;
    return (
      <div className="mt-2">
          <h2>{branding}</h2>
            {requests.map(request => (
                <Request
                    request={request}
                ></Request>
            ))}
      </div>
    )
  }
}

Requests.defaultProps = {

}

export default Requests;