import "./helpBox.css"
import Button from "../button/button";

const HelpBox = ( {titleLine1, titleLine2, content}) => {
    return <div className="helpBox">
            <h5 className="helpTitle">
                {titleLine1}
                <br/>
                {titleLine2}
                </h5>
            <h6 className="helpContent"> {content} </h6>
            <div className="helpButton">
                <Button text="CONTATAR"/>
            </div>
        </div>;
}

export default HelpBox