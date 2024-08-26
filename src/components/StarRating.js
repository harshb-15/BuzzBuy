// import { useState } from 'react';
import Star from './Star';

const createArray = (length) => [...Array(length)];

function StarRating({ totalStars = 5, selectedStars = 0, onRate=f=>f, style}) {
    // const [selectedStars, setSelectedStars] = useState(5);
    // console.log('Hi');
    return (
        <>
            {createArray(totalStars).map((_, i) => (
                <Star
                    key={i}
                    selected={selectedStars > i}
                    onSelect={() => onRate(i + 1)}
                    style={style}
                ></Star>
            ))}
            
        </>
    );
}
export default StarRating;
