import React from 'react'

type props = {
    value: number,
    filled: boolean,
    onClick: (args: number) => void
}
const Stars = ({ value, filled, onClick }: props) => {
    const handleClick = () => {
        onClick(value);
    };

    return (
        <span
            style={{ cursor: 'pointer', fontSize: "50px" }}
            onClick={handleClick}
        >
            {filled ? '★' : '☆'}
        </span>
    );
}

export default Stars