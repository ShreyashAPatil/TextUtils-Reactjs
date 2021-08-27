import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        // console.log("Uppercase was clicked " + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase", "success");
    }

    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase", "success");
    }
    
    const handleClrClick = () => {
        let newText = '';
        setText(newText);
        props.showAlert("Text Box has been cleared", "success");
    }
    
    const handleOnChange = (event) => {
        // console.log("Handle on change");
        setText(event.target.value);
    }
    
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces has been removed", "success");
    }
    
    const handleCopy = () => {
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text has been copied", "success");
    }
    const [text, setText] = useState('');
    // setText("new text");
    return (
        <>
            <div className="container" style={{color: props.Mode==='dark'?'white':'black'}}>
                <h2>{props.heading}</h2>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.Mode === 'dark'?'#202020':'white',color: props.Mode==='dark'?'white':'black'}} id="myBox" rows="4"></textarea>
                </div>
                <div className="container">
                    <button type="button" className="btn btn-danger mx-2 btn-sm" onClick={handleClrClick}>clear Text</button>
                    <button type="button" className="btn btn-warning mx-2 btn-sm" onClick={handleCopy}>Copy Text</button>
                    <button type="button" className="btn btn-warning mx-2 btn-sm" onClick={handleUpClick}>Convert to Uppercase</button>
                    <button type="button" className="btn btn-warning mx-2 btn-sm" onClick={handleLoClick}>Convert to Lowercase</button>
                    <button type="button" className="btn btn-warning mx-2 btn-sm" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
                </div>
            </div>
            <hr />
            <div className="container my-3" style={{color: props.Mode==='dark'?'white':'black'}}>
                <h4>Your text summary</h4>
                <p><b>{text.split(" ").length}</b> words and <b>{text.length}</b> characters</p>
                <p><b>{0.008 * text.split(" ").length}</b> Time to read</p>
                <h4>Preview</h4>
                <p><small>{text.length>0?text:"Enter something in the textbox above to preview it here"}</small></p>
            </div>

        </>
    )
}
