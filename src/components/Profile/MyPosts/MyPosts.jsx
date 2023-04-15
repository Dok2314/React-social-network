import Post from "./Post/Post";
import myPostsCss from "./MyPosts.module.css";

const MyPosts = () => {
    const posts = [
        {id: 1, text: 'First post from Daniil!', likesCount: 25},
        {id: 2, text: 'My post!', likesCount: 12},
        {id: 3, text: 'Where are you from?', likesCount: 45},
        {id: 4, text: 'How are you?', likesCount: 11},
        {id: 5, text: 'Do you play football?', likesCount: 34},
        {id: 6, text: 'Hello world!', likesCount: 9},
    ];

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