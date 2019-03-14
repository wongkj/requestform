import React, { Component } from 'react';

import Request from './Request';


class Requests extends Component {
    state = {
        requests: [
            {
                id: 1,
                title: 'First Request',
                user: 'John Smith',
                email: 'jsmith@gmail.com',
                team: 'Data Management',
                details: 'We have a problem with the our email inbox. It keeps getting flooded with a large amount of emails',
                urgency: 'High'
            },
            {
                id: 2,
                title: 'Second Request',
                user: 'John Snow',
                email: 'jsnow@gmail.com',
                team: 'Payments BIAS',
                details: 'This is another Request',
                urgency: 'Low'
            },
            {
                id: 3,
                title: 'Third Request',
                user: 'Daenerys',
                email: 'daenerys@gmail.com',
                team: 'PSST',
                details: 'Need help with something',
                urgency: 'Medium'                
            },
            {
                id: 4,
                title: 'Fourth Request',
                user: 'Tyrion Lannister',
                email: 'tyrion_lannister@gmail.com',
                team: 'DIP',
                details: "Don't know what to do here",
                urgency: 'Medium'
            }                                   
        ]
    }
    deleteRequest = (id) => {
        const { requests } = this.state;
        const newRequests = requests.filter(request => request.id !== id);
        this.setState({
            requests: newRequests
        })
    }
    
  render() {
    const { branding } = this.props;
    const { requests } = this.state;
    return (
      <div className="mt-2">
          <h2>{branding}</h2>
            {requests.map(request => (
                <Request
                    key={request.id}
                    request={request}
                    deleteClickHandler={this.deleteRequest.bind(this, request.id)}
                ></Request>
            ))}

      </div>
    )
  }
}

Requests.defaultProps = {

}

export default Requests;