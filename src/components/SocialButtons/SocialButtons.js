import CustomButton from "./customButton/CustomButton";


const SocialButtons = () => {
    return (
        <div>
           <CustomButton data={1230} type="like"/>
           <CustomButton data={572} type="comment"/>
           <CustomButton data={"Share this Tweet"} type="share"/>
        </div>       
    );
};

export default SocialButtons;