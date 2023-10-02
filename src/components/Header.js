import React from 'react'

const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            {props.subTitle && <h3>{props.subTitle}</h3>}
        </div>
    )
}

Header.defaultProps = {
    title: 'Indecision App'
};
