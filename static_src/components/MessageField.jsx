import React from 'react';

import { TextField, FloatingActionButton } from 'material-ui';
import SendIcon from 'material-ui/svg-icons/content/send';
import Message from './Message';

const botAnswers = ['Отстань, я робот', 'Кто такая Сири???', 'Поговорите лучше с Алисой', 'Тебе конец, кожаный мешок'];

function randomChoice(arr) {
    return arr[Math.floor(arr.length * Math.random())];
}

export default class MessageField extends React.Component {
    state = {
        messages: [{
            text: 'Привет!', sender: 'Вы'
        }, {
            text: 'Как дела?', sender: 'Вы'
        }],
        isYourMessage: true,
        input: ''
    }

    componentDidUpdate() {
        const {messages} = this.state;

        if (!this.state.isYourMessage) {
            setTimeout(() => {
                this.setState({messages: [
                    ...this.state.messages,
                    {sender: 'Бот', text: randomChoice(botAnswers)}
                ]});
            }, 1000);

            this.setState({ isYourMessage: true });
        }
    }

    handleSendMessage = () => {
        const {messages, input} = this.state;
        this.setState({ isYourMessage: true });

        this.setState({ messages: [
            ...messages,
            {sender: 'Вы', text: input}
        ], input: ''});

        this.setState({ isYourMessage: false });
    }

    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value});
    }

    handleKeyUp = (event) => {
        if (event.keyCode === 13) {
            this.handleSendMessage();
        }
    }

    render() {
        const {messages, input} = this.state;
        const messageElements =  messages.map(message =>
            <Message key={message} author={message.sender} text={message.text} />
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
                        value={ input }
                        onKeyUp={ (event) => this.handleKeyUp(event, input) }
                    />
                    <FloatingActionButton
                        onClick={ this.handleSendMessage }
                    >
                        <SendIcon />
                    </FloatingActionButton>
                </div>
            </div>
        )
    }
}