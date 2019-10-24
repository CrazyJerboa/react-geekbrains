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
            <div>
                <h5>{this.props.author}</h5>
                <p>{this.props.text}</p>
                <hr/>
            </div>
        )
    }
}
