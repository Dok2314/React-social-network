const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

const dialogsReducer = (state, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            return state;

        case SEND_MESSAGE:
            const body = state.newMessageBody;

            const newMessage = {
                id: 5,
                message: body,
            };

            state.messages.push(newMessage);
            state.newMessageBody = '';
            return state;

        default:
            return state;
    }
};

export const addMessageActionCreator = () => ({type: SEND_MESSAGE});
export const updateMessageBodyActionCreator = (body) => ({type: UPDATE_NEW_MESSAGE_BODY, body: body});

export default dialogsReducer;