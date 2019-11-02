import React from 'react';
import PropTypes from 'prop-types';

export default class Message extends React.Component {
    render() {
        console.log('Message render');
        return (
            <div
                className="message"
                style={ { alignSelf: this.props.sender === 'Бот' ? 'flex-start' : 'flex-end' } }
            >
                <h5 className="message-sender">{ this.props.sender }</h5>
                <p>{ this.props.text }</p>
            </div>
        )
    }
}
