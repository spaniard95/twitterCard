import linkImg from "./logo-og.png";
import "./linkCard.css";


const LinkCard = () => {
    return (
        <div class="linkCard">
            <img class="link-img" src={linkImg}></img>
            <div class="link-info"> 
                <div class="link-text"> React Article</div>
                <div class="link"> &#128279; blog.react.com</div>
            </div>
        </div>
    );
};

export default LinkCard