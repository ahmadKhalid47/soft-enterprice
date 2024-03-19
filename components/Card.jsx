import React from 'react';

const Card = ({ id, text }) => {
    return (
        <div
            className="card"
        // You can add styles and classes for your card
        >
            {text}
        </div>
    );
};

export default Card;
