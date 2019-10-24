import React from 'react';

export default class App extends React.Component {
    state = {
        header: 'Наш первый React-компонент'
    };

    render() {
        return (
            <h1>{this.state.header}</h1>
        )
    }
}