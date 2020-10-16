import React from 'react';
import Navigation from './navigation'
import { css } from '@emotion/core'

const Header = () => {

    return (
        <header
            css={css`
                background-color:rgb(31, 34, 51);
                padding:.8rem;
            `}
        >
            <div className="container">
                <Navigation />
            </div>
        </header>
    )
}
 
export default Header;