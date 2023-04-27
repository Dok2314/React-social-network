const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

const dialogsReducer = (state, action) => {

    if(action.type === UPDATE_NEW_MESSAGE_BODY) {
        state.newMessageBody = action.body;
    } else if(action.type === SEND_MESSAGE) {
        const body = state.newMessageBody;

        const newMessage = {
            id: 5,
            message: body,
        };

        state.messages.push(newMessage);
        state.newMessageBody = '';
    }

    return state;
};

export default dialogsReducer;