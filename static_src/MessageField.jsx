import React from 'react';

import Message from "./Message";

const botAnswers = ['Отстань, я робот', 'Кто такая Сири???', 'Поговорите лучше с Алисой', 'Тебе конец, кожаный мешок'];

function randomChoice(arr) {
    return arr[Math.floor(arr.length * Math.random())];
}

export default class MessageField extends React.Component {
    state = {
        messages: ['Привет!', 'Как дела?']
    }

    componentDidUpdate() {
        const {messages} = this.state;

        if (messages.length % 2 === 1) {
            setTimeout(() => {
                this.setState({messages: [
                    ...messages,
                    randomChoice(botAnswers)
                ]})
            }, 1000);
        }
    }

    handleSendMessage = () => {
        const {messages} = this.state;

        this.setState({ messages: [
            ...messages,
            'Нормально'
        ]});
    }

    render() {
        const {messages} = this.state;
        const messageElements =  messages.map(message =>
            <Message key={message} text={message} />
        );

        return (
            <div>
                <h1>{this.state.text}</h1>
                {messageElements}
                <button onClick={this.handleSendMessage}>Отправить сообщение</button>
            </div>
        )
    }
}