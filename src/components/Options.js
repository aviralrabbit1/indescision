import React from 'react';
import Option from './Option';

const Options = (props) => {
    return (
        <div>
            <button className='button button--link' disabled={!props.hasOptions} 
            onClick={props.deleteOptions} >Remove All</button>
            <p>You have {props.options.length > 0 ? props.options.length : 'no'} options:</p>
            {
                // this.props.options.map((option, index) => <p key={option}>{option} </p>)
                props.options.map((option, index) => (
                <Option key={option} optionText={option}
                deleteOption={props.deleteOption} />
                ))
            }
        </div>
    );
};

export default Options;
