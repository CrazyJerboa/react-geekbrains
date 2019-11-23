import update from 'react-addons-update';
import { ADD_CHAT } from "../actions/chatActions";
import {NEW_MESS_TO_ZERO, SEND_MESSAGE} from "../actions/messageActions";

const initialStore = {
    chats: {
        1: {title: 'Чат 1', messageList: [1]},
        2: {title: 'Чат 2', messageList: [2]},
        3: {title: 'Чат 3', messageList: []},
    },
    newMessInChat: 0
};


export default function chatReducer(store = initialStore, action) {
    switch (action.type) {
        case SEND_MESSAGE: {
            return update(store, {
                chats:{ $merge: { [action.chatId]: {
                            title: store.chats[action.chatId].title,
                            messageList: [...store.chats[action.chatId].messageList,
                                action.messageId]
                        }}},
                newMessInChat: {
                    $set: action.chatId
                }
            });
        }
        case NEW_MESS_TO_ZERO: {
            return update(store, {
                newMessInChat: {
                    $set: action.newMessInChat
                }
            });
        }
        case ADD_CHAT: {
            const chatId = Object.keys(store.chats).length + 1;
            return update(store, {
                chats: { $merge: {
                        [chatId]: {
                            title: action.title, messageList: []
                        } } },
            });
        }
        default:
            return store;
    }
}
