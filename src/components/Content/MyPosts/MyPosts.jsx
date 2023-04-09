import myPostsCss from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div>
            My Posts
            <div>
                <textarea name="" id="" cols="30" rows="10"></textarea>
                <div>
                    <button>Add post</button>
                    <button>Remove post</button>
                </div>
            </div>
            <div>
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
            </div>
        </div>
    );
};

export default MyPosts;