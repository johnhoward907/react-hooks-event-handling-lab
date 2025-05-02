
// Code Keypad Component Here
import React from 'react';

function EyesOnMe (){
    function handleFocus (){
        console.log('Good!')
    }
    function handleBlur(){
        console.log('Hey! Eyes on me!')
    }

    
    return (
        <div>
           <button onBlur={handleBlur} onFocus={handleFocus}>'Eyes on me'</button>
        </div>
    )
} 

export default EyesOnMe;