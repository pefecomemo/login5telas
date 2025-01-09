import Icon from "../icons/icon"
import "./button.css"

const Button = ( {text, buttonType, iconType, page}) => {
    return <a href={page || "#"} className={buttonType}>
        <Icon iconType={iconType} />
        {text}
    </a>
}

export default Button