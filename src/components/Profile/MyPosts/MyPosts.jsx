import Post from "./Post/Post";
import myPostsCss from "./MyPosts.module.css";

const MyPosts = () => {
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
                <Post text='First post from Daniil!' likesCount={25} />
                <Post text='My post!' likesCount={12} />
                <Post text='Where are you from?' likesCount={45} />
                <Post text='How are you?' likesCount={11} />
                <Post text='Do you play football?' likesCount={34} />
                <Post text='Hello world!' likesCount={9} />
            </div>
        </div>
    );
};

export default MyPosts;