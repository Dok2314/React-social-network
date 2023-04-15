import Post from "./Post/Post";
import myPostsCss from "./MyPosts.module.css";

const MyPosts = (props) => {
    const posts = props.posts;

    const postsElements = posts.map((p) => <Post key={p.id} text={p.text} likesCount={p.likesCount} />);

    return (
        <div className={myPostsCss.postsBlock}>
            <h3>My Posts</h3>
            <div>
                <div>
                    <textarea name="" id="" cols="30" rows="10"></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={myPostsCss.posts}>
                { postsElements }
            </div>
        </div>
    );
};

export default MyPosts;