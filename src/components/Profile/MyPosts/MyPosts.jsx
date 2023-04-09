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