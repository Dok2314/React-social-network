import React from "react";
import Post from "./Post/Post";
import myPostsCss from "./MyPosts.module.css";

const MyPosts = (props) => {
    const postsElements = props.posts.map((p) => <Post key={p.id} text={p.text} likesCount={p.likesCount} />);

    const newPostElement = React.createRef();

    const addPost = () => {
        props.addPost();
    };

    const onPostChange = () => {
        let text = newPostElement.current.value;

        props.updatePostText(text);
    };

    return (
        <div className={myPostsCss.postsBlock}>
            <h3>My Posts</h3>
            <div>
                <div>
                    <textarea ref={newPostElement} value={props.newPostText} onChange={onPostChange}></textarea>
                </div>
                <div>
                    <button onClick={ addPost }>Add post</button>
                </div>
            </div>
            <div className={myPostsCss.posts}>
                { postsElements }
            </div>
        </div>
    );
};

export default MyPosts;