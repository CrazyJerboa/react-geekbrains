import React from 'react';
import ReactDOM from 'react-dom';

let messages = ['Привет', 'Как дела?'];

const MessageComponent = (props) => <div>{props.text}</div>;

const MessageField = (props) => {
    return (
        <div>
            <h1>Chat:</h1>

            {props.messages.map(message => <MessageComponent text={ message } />)}

            <button onClick={addTestMessage}>click me</button>
        </div>

    );
};

const addTestMessage = () => {
    messages.push('Нормально');
    console.log(messages);
    ManualRender();
}

const ManualRender = () => {
    ReactDOM.render(
        <MessageField messages={ messages } />,
        document.getElementById('root'),
    );
}
ManualRender();