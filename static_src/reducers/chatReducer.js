import update from 'react-addons-update';
import { ADD_CHAT, SUCCESS_CHATS_LOADING  } from "../actions/chatActions";
import {
    NEW_MESS_TO_ZERO,
    SEND_MESSAGE,
    START_MESSAGES_LOADING,
    SUCCESS_MESSAGES_LOADING
} from "../actions/messageActions";

const initialStore = {
    chats: {},
    newMessInChat: 0,
    isLoading: true
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
        case START_MESSAGES_LOADING: {
            console.log('START');
            return store;
        }
        case SUCCESS_MESSAGES_LOADING: {
            const chats = {...store.chats};
            action.payload.forEach(msg => {
                const { id, chatId } = msg;
                chats[chatId].messageList.push(id);
            });
            return update(store, {
                chats: { $set: chats },
                isLoading: { $set: false },
            });
        }
        case SUCCESS_CHATS_LOADING: {
            return update(store, {
                chats: { $set: action.payload.entities.chats },
                isLoading: { $set: false },
            });
        }
        default:
            return store;
    }
}
