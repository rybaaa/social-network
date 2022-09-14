import React from 'react';

type HeaderPropsType = {
    title:string
}

function Header(props:HeaderPropsType) {
    return (<span>
            <a href='#s'>{ props.title }</a>
        </span>

    )
}

export default Header;