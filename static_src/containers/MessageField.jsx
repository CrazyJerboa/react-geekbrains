import React from 'react';
import PropTypes from "prop-types";

import { bindActionCreators } from "redux";
import connect from "react-redux/es/connect/connect";

import { TextField, FloatingActionButton } from 'material-ui';
import SendIcon from 'material-ui/svg-icons/content/send';
import Message from '../components/Message/index';

import { addChat } from '../actions/chatActions';
import { sendMessage } from '../actions/messageActions';

class MessageField extends React.Component {
    static propTypes = {
        chatId: PropTypes.number.isRequired,
        chats: PropTypes.object,
        messages: PropTypes.object
    }
    static defaultProps = {
        chatId: 1
    }

    state = {
        input: ''
    }

    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value});
    }

    handleKeyUp = (event, message, sender) => {
        if (event.keyCode === 13) {
            this.handleSendMessage(message, sender);
        }
    }

    handleSendMessage = (message, sender) => {
        const {chatId, messages} = this.props;
        const messageId = Object.keys(this.props.messages).length + 1;

        if (this.state.input.length > 0 || sender === 'Бот') {
            this.props.sendMessage(messageId, message, sender, this.props.chatId);
        }
        if (sender === 'Вы') {
            this.setState({input: ''});
        }
    }

    render() {
        const { chats, messages } = this.props;
        const { chatId } = this.props;

        const messageElements = this.props.chats[chatId]['messageList'].map(messageId => (
                <Message
                    key={messageId}
                    text={messages[messageId].text}
                    sender={messages[messageId].sender}
                />
            )
        );

        return (
            <div className="message-field__outer">
                <div className="message-field">
                    { messageElements }
                </div>

                <div className="message-field__bottom">
                    <TextField
                        name="input"
                        fullWidth={ true }
                        hintText="Введите сообщение"
                        style={ { fontSize: '22px' } }
                        onChange={ this.handleChange }
                        value={ this.state.input }
                        onKeyUp={ (event) => this.handleKeyUp(event, this.state.input, 'Вы') }
                    />
                    <FloatingActionButton
                        onClick={ () => this.handleSendMessage(this.state.input, 'Вы') }
                    >
                        <SendIcon />
                    </FloatingActionButton>
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({ chatReducer, messageReducer }) => ({
    chats: chatReducer.chats,
    messages: messageReducer.messages,
});

const mapDispatchToProps = dispatch => bindActionCreators({sendMessage}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(MessageField);