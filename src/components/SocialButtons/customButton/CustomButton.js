import "./customButton.css";

const CustomButton = ({data, type}) => {   
    return (
        <a>
            <el class={type}>{data}</el>
        </a>
        
    );   
};

export default CustomButton;