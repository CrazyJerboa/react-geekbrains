import React from 'react';
import PropTypes from "prop-types";

import {bindActionCreators} from "redux";
import connect from "react-redux/es/connect/connect";
import {push} from "connected-react-router";

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import {Link} from 'react-router-dom';
import {TextField, FloatingActionButton} from "material-ui";
import AddIcon from "material-ui/svg-icons/content/add";

import { addChat } from '../actions/chatActions';
import { setNewMessToZero } from '../actions/messageActions';

class ChatList extends React.Component {
    static propTypes = {
        onHandleCreateChat: PropTypes.func,
        setNewMessToZero: PropTypes.func,
        chats: PropTypes.object,
        push: PropTypes.func.isRequired,
        newMessInChat: PropTypes.number,
        chatId: PropTypes.number
    }

    state = {
        input: ''
    }

    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value});
    }

    handleKeyUp = (event) => {
        if (event.keyCode === 13) {
            this.handleCreateChat();
        }
    }

    handleCreateChat() {
        this.props.onHandleCreateChat(this.state.input);
        this.setState({input: ''});
    }

    render() {
        const { chats, newMessInChat, chatId } = this.props;

        const listItems = Object.keys(chats).map((key) => {

            let activeClass = '';
            let newMessClass = '';

            if (chatId === parseInt(key)) {
                activeClass = 'active';
            }
            if (newMessInChat === parseInt(key)) {
                newMessClass = 'new_mess';
            }

            let classesList = activeClass + ' ' + newMessClass;

            return (
                <ListItem
                    button
                    onClick={
                        () => {
                            this.props.push('/chat/' + key + '/');
                            if (parseInt(key) === newMessInChat) {
                                alert()
                                this.props.setNewMessToZero(0);
                            }
                        }
                    }
                    className={classesList}
                >
                    <ListItemText primary={chats[key]['title']}/>
                </ListItem>
            )
        });

        return (
            <div className="list__outer">
                <List className="list__users">
                    {listItems}
                </List>

                <div className="list__bottom">
                    <TextField
                        key="textField"
                        fullWidth
                        name="input"
                        hintText="Имя чата"
                        onChange={this.handleChange}
                        value={this.state.input}
                        onKeyUp={this.handleKeyUp}
                    />

                    <FloatingActionButton
                        className="add_chat_btn"
                        title="Add new chat"
                        onClick={ () => {
                            this.props.addChat(this.state.input !== ''
                                ? this.state.input
                                : 'Чат ' + (Object.keys(this.props.chats).length + 1));
                            this.setState({input: ''})
                        }}
                    >
                        <AddIcon />
                    </FloatingActionButton>
                </div>
            </div>
        );
    }
}

const mapStateToProps = ({chatReducer}) => ({
    chats: chatReducer.chats,
    newMessInChat: chatReducer.newMessInChat
});

const mapDispatchToProps = dispatch => bindActionCreators({ addChat, setNewMessToZero, push }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ChatList);