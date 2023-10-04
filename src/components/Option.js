import React from 'react'

const Option = (props) => {
    return (
        <div>
            {props.optionText}
            <button className='button button--link' 
            onClick={(e) => props.deleteOption(props.optionText)}>Delete</button>
        </div>
    );
};

export default Option;
