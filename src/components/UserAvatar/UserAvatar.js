import "./userAvatar.css";
import avatar from "./favicon.ico";
import tweetLogo from "./twitter_logo.png"

const UserAvatar = () => {
    return (
        <div class="userAvatar">
            <img class="avatar-img" src={avatar} alt="img"></img>
            <img class="twitter-img" src={tweetLogo} alt="twitter"></img>
            <div class="usernames">
                <div><a href="#" class="username">React</a></div>
                <div><t href="#">@React</t></div> 
            </div>
         </div>
    );
}

export default UserAvatar;