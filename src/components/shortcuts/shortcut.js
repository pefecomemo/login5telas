import "./shortcut.css"

const Shortcut = ( {number, numberStyle, text, money }) => {

    if (numberStyle !== 'lightBg' &&  numberStyle !== 'greenBg') {
        numberStyle = '';
    } 

    return <div className="shortCut">
                <h5 className={ numberStyle }> {number} </h5>
                <h6 className="titleShortCut"> {text} </h6>
                <h5 className="valueShortCut"> {money} </h5>
            </div>;

}

export default Shortcut