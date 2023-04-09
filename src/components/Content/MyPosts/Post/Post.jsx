import postCss from "../Post/Post.module.css";

const Post = () => {
    return (
        <div className={`${postCss.item} ${postCss.active}`}>
            <img src="https://png.pngtree.com/png-vector/20220817/ourmid/pngtree-cartoon-man-avatar-vector-ilustration-png-image_6111064.png" alt=""/>
            Post 1
        </div>
    );
};

export default Post;