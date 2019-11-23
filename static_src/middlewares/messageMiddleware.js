import {NEW_MESS_TO_ZERO, SEND_MESSAGE, sendMessage, setNewMessToZero} from "../actions/messageActions";

const botAnswers = ['Отстань, я робот', 'Кто такая Сири???', 'Поговорите лучше с Алисой', 'Тебе конец, кожаный мешок'];

function randomChoice(arr) {
    return arr[Math.floor(arr.length * Math.random())];
}

export default store => next => (action) => {
    switch (action.type) {
        case SEND_MESSAGE: {
            if (action.sender === 'Вы') {
                setTimeout(() => store.dispatch(
                    sendMessage(Object.keys(store.getState().messageReducer.messages).length + 1, randomChoice(botAnswers), 'Бот', action.chatId)
                ), 1000);
            }
            if (parseInt(action.chatId) === store.getState().chatReducer.newMessInChat) {
                setTimeout(() => {
                    store.dispatch(setNewMessToZero(0))
                }, 1000)
            }
        }
    }
    return next(action)
}
