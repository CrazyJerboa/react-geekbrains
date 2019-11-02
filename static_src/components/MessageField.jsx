import React from 'react';

import { TextField, FloatingActionButton } from 'material-ui';
import SendIcon from 'material-ui/svg-icons/content/send';
import Message from './Message';
import PropTypes from "prop-types";

const botAnswers = ['Отстань, я робот', 'Кто такая Сири???', 'Поговорите лучше с Алисой', 'Тебе конец, кожаный мешок'];

function randomChoice(arr) {
    return arr[Math.floor(arr.length * Math.random())];
}

export default class MessageField extends React.Component {
    static propTypes = {
        chatId: PropTypes.number.isRequired,
        onHandleSendMessage: PropTypes.func,
        onHandleKeyUp: PropTypes.func,
        chats: PropTypes.array,
        messages: PropTypes.array
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
        this.props.onHandleKeyUp(event, message, sender);
    }

    handleSendMessage = (message, sender) => {
        this.props.onHandleSendMessage(message, sender);
        this.setState({input: ''});
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.messages.length < this.props.messages.length &&
            this.props.messages[this.props.messages.length - 1].sender === 'Вы') {
            setTimeout(() => {
                this.handleSendMessage(randomChoice(botAnswers), 'Бот');
            }, 1000);
        }
    }

    render() {
        const { chats, messages } = this.props;
        const { chatId } = this.props;

        console.log('chats', chats);
        console.log('messages', messages);
        const messageElements = chats[chatId]['messages'].map(messageId => (
            <Message
                key={messageId}
                text={messages[messageId - 1].text}
                sender={messages[messageId - 1].sender}
            />
        ));

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