import React from 'react';

import Message from "./Message";

const botAnswers = ['Отстань, я робот', 'Кто такая Сири???', 'Поговорите лучше с Алисой', 'Тебе конец, кожаный мешок'];

function randomChoice(arr) {
    return arr[Math.floor(arr.length * Math.random())];
}

export default class MessageField extends React.Component {
    state = {
        messages: [
            ['Вы','Привет!'],
            ['Вы','Как дела?']
        ],
        isYourMessage: false
    }

    componentDidUpdate() {
        const {messages} = this.state;

        if (!this.state.isYourMessage) {
            setTimeout(() => {
                this.setState({messages: [
                    ...messages,
                    ['Бот',randomChoice(botAnswers)]
                ]});
            }, 1000);

            this.setState({ isYourMessage: true });
        }
    }

    handleSendMessage = () => {
        const {messages} = this.state;
        this.setState({ isYourMessage: true });

        this.setState({ messages: [
            ...messages,
            ['Вы', 'Нормально']
        ]});

        this.setState({ isYourMessage: false });
    }

    render() {
        const {messages} = this.state;
        const messageElements =  messages.map(message =>
            <Message key={message} author={message[0]} text={message[1]} />
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