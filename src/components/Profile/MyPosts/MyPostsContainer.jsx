import React from "react";
import {addPostActionCreator, updatePostTextActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {
    let state = props.store.getState();

    const addPost = () => {
        props.store.dispatch(addPostActionCreator());
    };

    const onPostChange = (text) => {
        props.store.dispatch(updatePostTextActionCreator(text));
    };

    return (
        <MyPosts
            updatePostText={onPostChange}
            addPost={addPost}
            posts={state.profilePage.posts}
            newPostText={state.profilePage.newPostText}
        />
    );
};

export default MyPostsContainer;