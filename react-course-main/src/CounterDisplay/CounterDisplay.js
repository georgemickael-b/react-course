import React from 'react';
import "./CounterDisplay.css"

function CounterDisplay(props) {
    return (
        <span className="count">
            {props.count} 
        </span>
    )
}

export default CounterDisplay