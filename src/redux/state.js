let rerenderEntireTree = () => {
    console.log('State was changed!');
};

const state = {
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
};

export const addPost = () => {
    let newPost = {
        id: 8,
        text: state.profilePage.newPostText,
        likesCount: 0,
    };

    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
};

export const updatePostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
};

export const subscribe = (observer) => {
    rerenderEntireTree = observer;
}

export default state;