import React, { useState } from 'react';
import ProgressBar from './ProgressBar';

export default function UploadForm() {
    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);

    const allowedTypes = ["image/png", "image/jpeg"];

    function changeHandler(event) {
        const selected = event.target.files[0];
        
        if (selected && allowedTypes.includes(selected.type)) {
            setFile(selected);
            setError("");
        } else {
            setFile(null);
            setError("Please select an image file (png or jpeg).");
        }
    }

    return (
        <form>
            <input type="file" onChange={changeHandler}/>
            <div className="output">
                {error && <p className="error">{error}</p>}
                {file && <p>{file.name}</p>}
                {file && <ProgressBar file={file} setFile={setFile} />}
            </div>
        </form>
    );
}
