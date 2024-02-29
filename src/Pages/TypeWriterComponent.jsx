import React from 'react'
import { useTypewriter } from './Typewriterhook';

export const TypeWriter = ({ text, speed }) => {
    const displayText = useTypewriter(text, speed);
    return (

        <p className="text-2xl">I'm into <span className='text-red-500'>{displayText}</span></p>

    )

    // (
    //     <div>TypeWriterComponent</div>
    // )
};
