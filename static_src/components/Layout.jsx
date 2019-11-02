import React from 'react';
import PropTypes from "prop-types";

import Grid from '@material-ui/core/Grid';

import Header from "./Header";
import ChatList from "./ChatList";
import MessageField from "./MessageField";

export default class Layout extends React.Component {
    static propTypes = {
        chatId: PropTypes.number,
    };

    static defaultProps = {
        chatId: 1,
    };


    state = {
        chats: {
            1: {name: 'Chat 1', messages: [1,2]},
            2: {name: 'Chat 2', messages: []},
            3: {name: 'Chat 3', messages: []}
        },
        messages: [{
            text: 'Привет!', sender: 'Вы'
        }, {
            text: 'Как дела?', sender: 'Вы'
        }],
        windowHeight: 0
    }

    handleKeyUp = (event, message, sender) => {
        if (event.keyCode === 13) {
            this.handleSendMessage(message, sender);
        }
    }

    handleSendMessage = (message, sender) => {
        const { chats } = this.state;
        const messLen = this.state.messages.length + 1;

        this.setState({
            messages: [
                ...this.state.messages,
                {sender: sender, text: message}
            ],
            chats: {
                ...chats,
                [this.props.chatId]: {
                    ...chats[this.props.chatId],
                    messages: [
                        ...chats[this.props.chatId]['messages'], messLen]
                }

            }
        });
    }

    handleCreateChat = () => {
        const { chats, messages } = this.state;

        const chatsLen = Object.keys(chats).length + 1;

        this.setState({
            chats: {
                ...chats,
                [chatsLen]: {
                    name: `Chat ${chatsLen}`, messages: []
                }
            }
        })
    }

    componentDidMount() {
        this.setState({windowHeight: window.innerHeight});
    }

    render() {

        return (
            <div className="layout" style={{height:this.state.windowHeight}}>
                <Header chatId={ this.props.chatId } />

                <Grid container spacing={2} className="container-main">
                    <Grid item xs={3}>
                        <ChatList
                            chats={ this.state.chats }
                            onHandleCreateChat={this.handleCreateChat}
                        />
                    </Grid>
                    <Grid item xs={9}>
                        <MessageField
                            chats={ this.state.chats }
                            chatId={ this.props.chatId }
                            messages={ this.state.messages }
                            onHandleKeyUp={this.handleKeyUp}
                            onHandleSendMessage={this.handleSendMessage}
                        />
                    </Grid>
                </Grid>
            </div>
        );
    }
}