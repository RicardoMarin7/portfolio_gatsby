import React, { useState } from 'react';
import { Link } from 'gatsby'
import styled from '@emotion/styled'
import { css } from '@emotion/core'

const Navigation = () => {

    const Nav = styled.nav`
        display:flex;
        justify-content:space-between;
        @media(max-width:768px){
            position:relative;
            max-width:720px;
            margin:0 auto;
        }
    `

    return ( 
        <Nav>
            <Link to='/'
                css={css`
                    padding:1rem;
                    text-decoration: none;
                    color:#F0A152;
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
                    display:none;
                    @media(max-width:768px){
                        display:block;
                        padding:2rem 1rem;
                        transition: all .4s ease-in-out;

                        span{
                            display:block;
                            height: .2rem;
                            background-color: #F0A152;
                            transition: 0.4s;
                            margin-top:0.6rem;

                            &:nth-of-type(1){
                                width:1.4rem;
                                margin-left:1.4rem;
                            }
                            &:nth-of-type(2){
                                width:2.8rem;
                            }
                            &:nth-of-type(3){
                                width:1.4rem;
                                margin-right:1.4rem;
                            }
                            
                        }


                        &:hover{
                            transform: rotate(-45deg);
                            span{
                                &:nth-of-type(1){
                                    transform: rotate(-90deg) translateY(7px);
                                    margin-right: 0;
                                    margin-left: 0;
                                }
                                &:nth-of-type(2){
                                    margin: 6px 0;
                                }
                                &:nth-of-type(3){
                                    transform: rotate(-90deg) translateY(7px);
                                    margin-right: 0;
                                    margin-left: 0;
                                }
                            }
                        }
                    }
                    
                `
                }
            >
                <span></span>
                <span></span>
                <span></span>
            </div>

            <div
                css={css`
                    font-size:15px;
                    font-weight: 700;
                    color:#FBF4E0;
                    display:flex;
                    justify-content: space-between;
                    align-items: center;
                    a:first-of-type{
                        color:#F0A152;
                    }

                    a{
                        margin-right:1.2rem;
                    }

                    @media(max-width: 768px){
                        position:absolute;
                        flex-direction:column;
                        top:8.3rem;
                        width:100%;
                        margin-right:auto!important;
                        left:0;
                        background-color:#1F2233;
                        box-shadow: 0 0 15px rgba(0, 0, 0, .12);
                        
                        a{
                            width:90%;
                            margin-top:1.5rem;
                            transition: all .3s ease-in-out;
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
                        border: 1px solid #F0A152;
                        border-radius: .4rem;
                        padding:1rem 1.8rem;
                        color: #F0A152;
                    `}
                >Contactame</Link>
            </div>
        </Nav>
    )
}

export default Navigation;