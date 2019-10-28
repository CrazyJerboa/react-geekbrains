import React from 'react';
import PropTypes from 'prop-types';

export default class Message extends React.Component {
    static propTypes = {
        text: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired,
    }

    render() {
        console.log('Message render');
        return (
            <div
                className="message"
                style={ { alignSelf: this.props.author === 'Бот' ? 'flex-start' : 'flex-end' } }
            >
                <h5 className="message-sender">{ this.props.author }</h5>
                <p>{ this.props.text }</p>
            </div>
        )
    }
}
