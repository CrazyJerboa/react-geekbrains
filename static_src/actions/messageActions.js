export const SEND_MESSAGE = '@@message/SEND_MESSAGE';
export const REMOVE_MESSAGE = '@@message/REMOVE_MESSAGE';
export const NEW_MESS_TO_ZERO = '@@message/NEW_MESS_TO_ZERO';

export const sendMessage = (messageId, text, sender, chatId) => ({
    type: SEND_MESSAGE,
    messageId,
    text,
    sender,
    chatId
});

export const removeMessage = (messageId) => ({
    type: REMOVE_MESSAGE,
    messageId
});

export const setNewMessToZero = (newMessInChat) => ({
    type: NEW_MESS_TO_ZERO,
    newMessInChat
});