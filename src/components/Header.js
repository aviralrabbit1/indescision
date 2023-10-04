import React from 'react'

const Header = (props) => {
    return (
        <div className="header" >
            <h1 className='header__title'>{props.title}</h1>
            {props.subTitle && <h3 className='header__subtitle'>{props.subTitle}</h3>}
        </div>
    )
}

Header.defaultProps = {
    title: 'Indecision App'
};

export default Header;
