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

    render() {
        return (
            <div className="layout">
                <Header chatId={ this.props.chatId } />

                <Grid container spacing={2} className="container-main">
                    <Grid item xs={3}>
                        <ChatList/>
                    </Grid>
                    <Grid item xs={9}>
                        <MessageField chatId={ this.props.chatId } />
                    </Grid>
                </Grid>
            </div>
        );
    }
}