const ADD_POST = 'ADD-POST';
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT';

const initialState = {
    posts: [
        {id: 1, text: 'First post from Daniil!', likesCount: 25},
        {id: 2, text: 'My post!', likesCount: 12},
        {id: 3, text: 'Where are you from?', likesCount: 45},
        {id: 4, text: 'How are you?', likesCount: 11},
        {id: 5, text: 'Do you play football?', likesCount: 34},
        {id: 6, text: 'Hello world!', likesCount: 9},
    ],
    newPostText: "dok",
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 8,
                text: state.newPostText,
                likesCount: 0,
            };

            state.posts.push(newPost);
            state.newPostText = '';
            return state;

        case UPDATE_POST_TEXT:
            state.newPostText = action.newText;
            return state;

        default:
            return state;
    }
};

export const addPostActionCreator = () => ({type: ADD_POST});
export const updatePostTextActionCreator = (text) => ({type: UPDATE_POST_TEXT, newText: text});

export default profileReducer;