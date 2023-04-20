import profileCss from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./MyPosts/ProfileInfo/ProfileInfo";
import {updatePostText} from "../../redux/state";

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo />

            <MyPosts
                posts={props.profilePage.posts}
                newPostText={props.profilePage.newPostText}
                addPost={props.addPost}
                updatePostText={props.updatePostText}
            />
        </div>
    );
};

export default Profile;