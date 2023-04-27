const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

const initialState = {
    dialogs: [
        {id: 1, name: 'Daniil'},
        {id: 2, name: 'Sabina'},
        {id: 3, name: 'Oleg'},
        {id: 4, name: 'Nika'},
        {id: 5, name: 'Vitya'},
        {id: 6, name: 'Nika'},
        {id: 7, name: 'Kostya'},
    ],
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How is your DOK?'},
        {id: 3, message: 'Hello dude!'},
        {id: 4, message: 'My name John!'}
    ],
    newMessageBody: "",
};

const dialogsReducer = (state = initialState, action) => {
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