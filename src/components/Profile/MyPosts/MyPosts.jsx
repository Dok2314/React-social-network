import Post from "./Post/Post";
import myPostsCss from "./MyPosts.module.css";

const MyPosts = () => {
    const postData = [
        {id: 1, text: 'First post from Daniil!', likesCount: 25},
        {id: 2, text: 'My post!', likesCount: 12},
        {id: 3, text: 'Where are you from?', likesCount: 45},
        {id: 4, text: 'How are you?', likesCount: 11},
        {id: 5, text: 'Do you play football?', likesCount: 34},
        {id: 6, text: 'Hello world!', likesCount: 9},
    ];

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
                <Post text={postData[0].text} likesCount={postData[0].likesCount} />
                <Post text={postData[1].text} likesCount={postData[1].likesCount} />
                <Post text={postData[2].text} likesCount={postData[2].likesCount} />
                <Post text={postData[3].text} likesCount={postData[3].likesCount} />
                <Post text={postData[4].text} likesCount={postData[4].likesCount} />
                <Post text={postData[5].text} likesCount={postData[5].likesCount} />
            </div>
        </div>
    );
};

export default MyPosts;