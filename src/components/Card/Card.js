import UserAvatar from "../UserAvatar/UserAvatar";
import TweetText from "../TweetText";
import LinkCard from "../LinkCard";
import Time from "../Time";
import SocialButtons from "../SocialButtons";
import ReplyButton from "../ReplyButton";
import "./card.css";

const Card = () => {
    return (
        <div class="card">
            <UserAvatar/>
            <TweetText/>
            <LinkCard/>
            <Time/>
            <SocialButtons/> 
            <ReplyButton/>
        </div>
    );
}

export default Card;