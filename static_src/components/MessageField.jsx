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
    }
    static defaultProps = {
        chatId: 1
    }

    state = {
        chats: [[1,2], [], []],
        messages: [{
            text: 'Привет!', sender: 'Вы'
        }, {
            text: 'Как дела?', sender: 'Вы'
        }],
        input: ''
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.messages.length < this.state.messages.length &&
            this.state.messages[this.state.messages.length - 1].sender === 'Вы') {
            setTimeout(() => {
                this.handleSendMessage(randomChoice(botAnswers), 'Бот');
            }, 1000);
        }
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
        const { chats } = this.state;
        chats[this.props.chatId - 1] =
            [...chats[this.props.chatId - 1], this.state.messages.length + 1];

        this.setState({
            messages: [
                ...this.state.messages,
                {sender: sender, text: message}
            ],
            chats: chats,
            input: ''
        });
    }

    render() {
        const { chats, messages } = this.state;
        const { chatId } = this.props;

        const messageElements = chats[chatId - 1].map(messageId => (
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