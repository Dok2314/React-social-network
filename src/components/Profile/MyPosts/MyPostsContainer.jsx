import React from "react";
import {addPostActionCreator, updatePostTextActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import StoreContext from "../../../StoreContext";

const MyPostsContainer = () => {
    return (
        <StoreContext.Consumer>
            {
                store => {
                    const state = store.getState();

                    const addPost = () => {
                        store.dispatch(addPostActionCreator());
                    };

                    const onPostChange = (text) => {
                        store.dispatch(updatePostTextActionCreator(text));
                    };

                    return <MyPosts
                        updatePostText={onPostChange}
                        addPost={addPost}
                        posts={state.profilePage.posts}
                        newPostText={state.profilePage.newPostText}
                    />
                }
            }
        </StoreContext.Consumer>
    );
};

export default MyPostsContainer;