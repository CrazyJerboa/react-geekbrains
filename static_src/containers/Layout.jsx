import React from 'react';
import PropTypes from "prop-types";

import {bindActionCreators} from "redux";
import connect from "react-redux/es/connect/connect";

import Grid from '@material-ui/core/Grid';

import Header from "./Header";
import ChatList from "./ChatList";
import MessageField from "./MessageField";

import { sendMessage } from "../actions/messageActions";

class Layout extends React.Component {
    static propTypes = {
        chatId: PropTypes.number,
        sendMessage: PropTypes.func.isRequired,
        chats: PropTypes.object
    };

    static defaultProps = {
        chatId: 1,
    };


    state = {
        windowHeight: 0
    }

    sendMessage = (message, sender) => {
        const { messages, chats } = this.state;
        const { chatId } = this.props;

        const messageId = Object.keys(messages).length + 1;
        this.setState({
            messages: {...messages,
                [messageId]: {text: message, sender: sender}}
        });
        this.props.sendMessage(messageId, message, sender, chatId);
    };

    componentDidMount() {
        this.setState({windowHeight: window.innerHeight});
    }

    render() {
        return (
            <div className="layout" style={{height:this.state.windowHeight}}>
                <Header
                    chatId={ this.props.chatId }
                    chatsName={ this.props.chats[this.props.chatId].title }
                />

                <Grid container spacing={2} className="container-main">
                    <Grid item xs={3}>
                        <ChatList />
                    </Grid>
                    <Grid item xs={9}>
                        <MessageField
                            chatId={ this.props.chatId }
                            sendMessage={ this.sendMessage }
                        />
                    </Grid>
                </Grid>
            </div>
        );
    }
}

const mapStateToProps = ({chatReducer}) => ({
    chats: chatReducer.chats
});

const mapDispatchToProps = dispatch => bindActionCreators({ sendMessage }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Layout);