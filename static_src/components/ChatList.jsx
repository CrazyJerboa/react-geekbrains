import React from 'react';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import {Link} from 'react-router-dom';
import {FloatingActionButton, TextField} from "material-ui";
import AddIcon from "material-ui/svg-icons/content/add";
import PropTypes from "prop-types";

export default class ChatList extends React.Component {
    static propTypes = {
        onHandleCreateChat: PropTypes.func,
        chats: PropTypes.array
    }

    handleCreateChat() {
        this.props.onHandleCreateChat();
    }

    render() {
        const { chats } = this.props;
        const listItems = Object.keys(chats).map((key) => {

            return (
                <Link to={'/chat/' + key + '/'} key={key}>
                    <ListItem button>
                        <ListItemText primary={chats[key]['name']} secondary="Jan 9, 2014"/>
                    </ListItem>
                </Link>
            )
        });

        return (
            <div className="list__outer">
                <List className="list__users">
                    {listItems}
                </List>

                <FloatingActionButton
                    className="add_chat_btn"
                    title="Add new chat"
                    onClick={ () => this.handleCreateChat() }
                >
                    <AddIcon />
                </FloatingActionButton>
            </div>
        );
    }
}