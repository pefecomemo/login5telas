import "./helpBox.css"
import Button from "../button/button";

const HelpBox = ( {title, content}) => {
    return <div classnName="">
            <h5 className="helpTitle"> {title} </h5>
            <h6 className="helpContent"> {content} </h6>
            <Button text="CONTATAR"/>
        </div>;
}

export default HelpBox