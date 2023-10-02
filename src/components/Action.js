import React from 'react'

const Action = (props) => {
    return (
        <div>
            <button disabled={!props.hasOptions} 
            onClick={props.makeDecision} >What should i do?</button>
        </div>
    )
}

export default Action;
