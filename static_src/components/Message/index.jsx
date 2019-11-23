import React from 'react';

import './styles.css';
import ListItemText from "@material-ui/core/ListItemText";
import ListItem from "@material-ui/core/ListItem";
import RemoveIcon from 'material-ui/svg-icons/action/delete';

export default class Index extends React.Component {
    removeMessage = (id) => {
        this.props.handleRemoveMessage(id);
    }

    render() {
        console.log('Index render');
        return (
            <div
                className="message"
                style={ { alignSelf: this.props.sender === 'Бот' ? 'flex-start' : 'flex-end' } }
            >
                <h5 className="message-sender">{ this.props.sender }</h5>
                <p>{ this.props.text }</p>

                <RemoveIcon
                    className="message-remove"
                    onClick={
                        () => this.removeMessage(this.props.messageId)
                    }
                />
            </div>
        )
    }
}
