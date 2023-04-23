const ADD_POST = 'ADD-POST';
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

const store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, text: 'First post from Daniil!', likesCount: 25},
                {id: 2, text: 'My post!', likesCount: 12},
                {id: 3, text: 'Where are you from?', likesCount: 45},
                {id: 4, text: 'How are you?', likesCount: 11},
                {id: 5, text: 'Do you play football?', likesCount: 34},
                {id: 6, text: 'Hello world!', likesCount: 9},
            ],
            newPostText: "dok",
        },
        dialogsPage: {
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
        },
        sidebar: {},
    },

    _callSubscriber() {
        console.log('State was changed!');
    },

    getState() {
        return this._state;
    },

    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        if(action.type === ADD_POST) {
            let newPost = {
                id: 8,
                text: this._state.profilePage.newPostText,
                likesCount: 0,
            };

            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if(action.type === UPDATE_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        } else if(action.type === UPDATE_NEW_MESSAGE_BODY) {
            this._state.dialogsPage.newMessageBody = action.body;
            this._callSubscriber(this._state);
        } else if(action.type === SEND_MESSAGE) {
            const body = this._state.dialogsPage.newMessageBody;

            const newMessage = {
                id: 5,
                message: body,
            };

            this._state.dialogsPage.messages.push(newMessage);
            this._state.dialogsPage.newMessageBody = '';
            this._callSubscriber(this._state);
        }
    },
};

export const addPostActionCreator = () => ({type: ADD_POST});
export const updatePostTextActionCreator = (text) => ({type: UPDATE_POST_TEXT, newText: text});

export const addMessageActionCreator = () => ({type: SEND_MESSAGE});
export const updateMessageBodyActionCreator = (body) => ({type: UPDATE_NEW_MESSAGE_BODY, body: body});

export default store;