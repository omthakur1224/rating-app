import React, { useState } from 'react'
import Stars from './Stars';

const RatingSystem = () => {
    const [rating, setRating] = useState(0);

    const handleRatingChange = (value: number) => {
        setRating(value);
    };

    return (
        <div>
            <h1>Please rate:</h1>
            <h3>Selected Rating: {rating}</h3>
            {[1, 2, 3, 4, 5].map((value) => (
                <Stars
                    key={value}
                    value={value}
                    filled={value <= rating}
                    onClick={handleRatingChange}
                />
            ))}
        </div>
    );
}

export default RatingSystem