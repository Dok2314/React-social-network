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
        },
        sidebar: {},
    },

    getState() {
        return this._state;
    },

    _callSubscriber() {
        console.log('State was changed!');
    },

    addPost() {
        let newPost = {
            id: 8,
            text: this._state.profilePage.newPostText,
            likesCount: 0,
        };

        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
    },

    updatePostText(newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },

    subscribe(observer) {
        this._callSubscriber = observer;
    }
};

export default store;