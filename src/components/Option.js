import React from 'react'

const Option = (props) => {
    return (
        <div>
            {props.optionText}
            <button onClick={(e) => props.deleteOption(props.optionText)}>Delete</button>
        </div>
    );
};
