import React from 'react';

import './styles.css';

export default class Index extends React.Component {
    render() {
        console.log('Index render');
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
