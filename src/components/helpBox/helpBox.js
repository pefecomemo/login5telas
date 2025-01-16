import "./helpBox.css"

const HelpBox = ( {title, content, buttonText}) => {
    return <div classnName="">
            <h5 className="helpTitle"> {title} </h5>
            <h6 className="helpContent"> {content} </h6>
            <h5 className="helpButton"> {buttonText} </h5>
        </div>;
}

export default HelpBox