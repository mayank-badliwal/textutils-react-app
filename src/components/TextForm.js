import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        console.log('uppercase was clicked' + text)
        let newText = text.toUpperCase()
        setText(newText)
        props.showAlert("Converted to uppercase.", "success")
    }
    const handleLoClick = () => {
        console.log('uppercase was clicked' + text)
        let newText = text.toLowerCase()
        setText(newText)
        props.showAlert("Converted to lowercase.", "success")
    }

    const handleOnChange = (event) => {
        console.log('On change')
        setText(event.target.value)
    }
    const [text, setText] = useState('')
    // text = "new text"    //Wrong way to change the state
    // setText("new text")  //correct way to change the state
    return (
        <>
            <div className="container" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }} >
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleOnChange} style={
                        {
                            backgroundColor: props.mode === 'dark' ? 'grey' : 'white',
                            color: props.mode === 'dark' ? 'white' : '#042743'
                        }
                    }
                    ></textarea>
                </div>
                <button className="btn btn-primary mx-1" onClick={handleUpClick} >Convert to uppercase</button>
                <button className="btn btn-primary mx-1" onClick={handleLoClick} >Convert to lowercase</button>
            </div>

            <div className="container my-3" style={
                { color: props.mode === 'dark' ? 'white' : '#042743' }
            }>
                <h2>Your text summary:</h2>
                <p>{text.length} characters and {text.split(" ").length} words.</p>
                <p>{0.008 * text.split(" ").length} mins to read</p>

                <h2>Preview:</h2>
                <p>{text.length>0?text:"Enter text in box above to preview it here..."}</p>
            </div>
        </>
    )
}
