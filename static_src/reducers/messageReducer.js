import update from 'react-addons-update';
import { SEND_MESSAGE, REMOVE_MESSAGE } from '../actions/messageActions';

const initialStore = {
    messages: {
        1: { text: 'Привет!', sender: 'Вы' },
        2: { text: 'Как дела?', sender: 'Вы' }
    },
    isLoading: false
};


export default function messageReducer(store = initialStore, action) {
    switch (action.type) {
        case SEND_MESSAGE: {
            return update(store, {
                messages: {
                    $merge: {
                        [action.messageId]: {
                            text: action.text,
                            sender: action.sender
                        }
                    }
                }
            });
        }
        case REMOVE_MESSAGE: {
            let obj = {}

            for (let key in store.messages) {
                if (parseInt(key) !== action.messageId)
                    obj[key] = store.messages[key];
            }

            return update(store, {
                messages: {
                    $set: obj
                }
            })
        }
        default:
            return store;
    }
}
