import React, { useState } from 'react';
import { Link } from 'gatsby'
import styled from '@emotion/styled'
import { css } from '@emotion/core'

const primary = '#F0A152'

    const Nav = styled.nav`
        display:flex;
        justify-content:space-between;
        align-items:center;
        @media(max-width:768px){
            position:relative;
            margin:0 auto;
        }
    `

    const StyledBurguer = styled.div`
        display:none;
        max-height:3.5rem;
        transform: ${ ({open}) => open ? 'rotate(-45deg)' : 'rotate(0deg)' };
        transition: all .3s linear;        
        span{
                transition: all .3s linear;
                display:block;
                height: .2rem;
                background-color: ${primary};
                margin-top:0.6rem;
                
                &:nth-of-type(1){
                    margin-top:0;
                    width:1.4rem;
                    transform: ${ ({open}) => open ? 'rotate(-90deg) translateY(7px)' : 'initial' };
                    ${ ({open}) => open ? 'margin-right:0' : null };
                    ${ ({open}) => open ? 'margin-left:0' : 'margin-left: 1.4rem' };
                }
                &:nth-of-type(2){
                    width:2.8rem;
                    ${ ({open}) => open ? 'margin: .6rem 0' : null };
                }
                &:nth-of-type(3){
                    width:1.4rem;
                    transform: ${ ({open}) => open ? 'rotate(-90deg) translateY(7px)' : 'initial' };
                    ${ ({open}) => open ? 'margin-right:0' : 'margin-right: 1.4rem' };
                    ${ ({open}) => open ? 'margin-left:0' : null };
                }
            }
        
        @media(max-width:768px){
            display:block;
        }
    `

    const StyledMenu = styled.div`
        font-size:15px;
        font-weight: 700;
        color:#FBF4E0;
        display:flex;
        justify-content: space-between;
        align-items: center;

        a:first-of-type{
            color:${primary};
        }

        a{
            margin-right:1.2rem;
            transition: all .4s ease-in-out;
        }

        a:hover{
            transform: translateX(.3rem);
        }

        @media(max-width: 768px){
            position:absolute;
            transform: ${ ({open}) => open ? 'scaleY(1)' : 'scaleY(0)'};
            transform-origin:0 0;
            transition: all .3s ease-in-out;
            flex-direction:column;
            top:8.3rem;
            width:100%;
            margin-right:auto!important;
            left:0;
            background-color:#1F2233;
            
            a{
                width:90%;
                margin-top:1.5rem;
                transition: all .4s ease-in-out;
                font-size: 1.4rem;
                letter-spacing:.2rem;
            }
            a:hover{
                transform: translateX(1rem);
            }
            a:last-child{
                border:initial;
                padding:inherit;
                color:inherit;
                margin-bottom:1.5rem;
            }
        }
    `

const Navigation = () => {

    const [open,setOpen] = useState(false)

    return ( 
        <Nav>
            <Link to='/'
                css={css`
                    padding:1rem;
                    text-decoration: none;
                    color:${primary};
                    font-size:2.8rem;
                    font-weight:700;
                    span{
                        color:#FBF4E0;
                    }

                    
                `}
            >
                <span>R</span>icardo
            </Link>
            
            
            <StyledBurguer 
                open={open}
                onClick={ () => setOpen(!open) }
            >
                <span></span>
                <span></span>
                <span></span>
            </StyledBurguer>

            <StyledMenu
                open={open}
                onClick={ () => setOpen(!open)}
            >   
                
                <Link>Home</Link>
                <Link>About</Link>
                <Link>Servicios</Link>
                <Link>Extracto</Link>
                <Link>Portafolio</Link>
                <Link>Blog</Link>
                <Link
                    css={css`
                        border: 1px solid ${primary};
                        border-radius: .4rem;
                        padding:1rem 1.8rem;
                        color: ${primary};
                    `}
                >Contactame</Link>
            </StyledMenu>
        </Nav>
    )
}

export default Navigation;