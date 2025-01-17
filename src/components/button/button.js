import Icon from "../icons/icon"
import "./button.css"

const Button = ( {text, buttonType, iconType, page}) => {
    let iconReturn = iconType ? <Icon iconType={iconType} /> : <></>
    
    return <a href={page || "#"} className={buttonType}>
        {iconReturn}        
        {text}
    </a>
}

export default Button