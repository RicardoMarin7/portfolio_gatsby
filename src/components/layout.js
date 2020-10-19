import React from 'react'
import Helmet from 'react-helmet'
import { Global, css } from '@emotion/core'
//Components
import Header from './header'

const Layout = ({children}) => {

    return ( 
        <>
            <Global 
                styles={css`
                    html{
                        box-sizing: border-box;
                        font-size: 62.5%;
                    }
                    *, *:before, *:after {
                        box-sizing: inherit;
                    }

                    body{
                        font-size:1.6rem;
                        line-height:2;
                        font-family: 'Open Sans', sans-serif;
                        background-color:rgb(36, 40, 61);
                    }

                    h1,h2,h3,h4,h5,a{
                        font-family: 'Montserrat', sans-serif;
                    }

                    ul{
                        list-style:none;
                        margin:0;
                        padding:0;
                    }

                    .container{
                        max-width: 114rem;
                        margin: 0 auto;
                        width: 95%;
                    }

                    img {
                        max-width:100%;
                    }

                `}
            />

            <Helmet>
                <title>Ricardo Marin</title>
                <meta name="Portafolio profesional de Ricardo Marin, Full Stack Developer" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.css" integrity="sha512-oHDEc8Xed4hiW6CxD7qjbnI+B07vDdX7hEPTvn9pSZO1bcRqHp8mj9pyr+8RVC2GmtEfI2Bi9Ke9Ass0as+zpg==" crossorigin="anonymous" />
                <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;700&family=Open+Sans:ital,wght@0,400;0,700;1,300&display=swap" rel="stylesheet"></link>
            </Helmet>
            
            <Header />
                    {children}
        </>
    )
}
 
export default Layout;