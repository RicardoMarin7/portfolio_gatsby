import React from 'react';
import Navigation from './navigation'
import { css } from '@emotion/core'

const Header = () => {

    return (
        <header
            css={css`
                background-color:#1F2233;
                padding:.8rem;
            `}
        >
            <div
                css={css`
                    max-width:114rem;
                    margin: 0 auto;
                `}
            >
                <Navigation />
            </div>
        </header>
    )
}

export default Header;