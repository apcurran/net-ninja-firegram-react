import React from 'react';

export default function Modal({ selectedImg, setSelectedImg }) {
    function handleClick(event) {
        if (event.target.classList.contains("backdrop")) {
            setSelectedImg(null);
        }
    }

    return (
        <div className="backdrop" onClick={handleClick}>
            <img src={selectedImg} alt="Fullsize img" />
        </div>
    );
}
