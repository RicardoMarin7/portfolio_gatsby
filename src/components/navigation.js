import React from 'react';
import { Link } from 'gatsby'
import styled from '@emotion/styled'
import { css } from '@emotion/core'

const Nav = styled.nav`
    display:flex;
    justify-content:space-between;
`

const Navigation = () => {
    return ( 
        <Nav>
            <Link to='/'
                css={css`
                    padding:1rem;
                    text-decoration: none;
                    color:#F1A433;
                    font-size:2.8rem;
                    font-weight:700;

                    span{
                        color:#FBF4E0;
                    }
                `}
            >
                <span>R</span>icardo
            </Link>

            <div
                css={css`
                    font-size:15px;
                    font-weight: 700;
                    color:#FBF4E0;
                    display:flex;
                    justify-content: space-between;
                    align-items: center;
                    flex-grow:1;
                    max-width:52%;
                    a:first-of-type{
                        color:#F1A433;
                    }
                `}
            >    
                <Link>Home</Link>
                <Link>About</Link>
                <Link>Servicios</Link>
                <Link>Extracto</Link>
                <Link>Portafolio</Link>
                <Link>Blog</Link>
                <Link
                    css={css`
                        border: 1px solid #F1A433;
                        border-radius: .4rem;
                        padding:1rem 1.8rem;
                        color: #F1A433;
                    `}
                >Contactame</Link>
            </div>
        </Nav>
     )
}
 
export default Navigation;