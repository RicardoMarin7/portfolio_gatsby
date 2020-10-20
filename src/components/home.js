import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import styled from '@emotion/styled'

const primaryColor = '#F0A152'
const HomeSection = styled.section`
    height:90vh;
    background: ${props => `url(${props.background}) center center no-repeat`};
    background-size: cover;
`

const Overlay = styled.div`
    display:flex;
    height: 100%;
    background: rgba(31, 34, 51, .45);
    flex-direction:column;
    justify-content: center;
`
const Subtitles = styled.h3`
    color: #d8d7d6;
    font-size: 2.2rem;
    font-weight: 600;
    text-transform: capitalize;
    letter-spacing: .1rem;
    margin: 0;
    @media(max-width:480px){
        font-size:2rem;
    }
`

const Title = styled.h1`
    color: #fff;
    font-size: 8rem;
    margin: 3rem 0;
    text-transform: capitalize;
    font-weight: 800;
    line-height: 1;

    @media(max-width:480px){
        font-size:5rem;
    }
`

const HireMe = styled.button`
    display: inline-block;
    min-width: 15.5rem;
    color: #fff;
    padding: 1.4rem 0;
    font-size: 1.4rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: .1rem;
    text-align: center;
    background-color: ${primaryColor};
    border: .1rem solid ${primaryColor};
    border-radius: .4rem;
    outline: none;
    -webkit-transition: all .4s ease-in-out;
    -moz-transition: all .4s ease-in-out;
    -o-transition: all .4s ease-in-out;
    -ms-transition: all .4s ease-in-out;
    transition: all .4s ease-in-out;
    margin-top: 3rem;
`

const Home = () => {

    const { mainBackground } = useStaticQuery(graphql`
        query{
            mainBackground: file(relativePath: {eq: "main-background.jpg"}) {
            publicURL
            }
        }
    `
    )

    return(
        <HomeSection background={mainBackground.publicURL}>
                <Overlay>
                    <div className="container">
                        <Subtitles>Hola! Soy</Subtitles>
                        <Title>Ricardo Marin</Title>
                        <Subtitles>Desarrollador Fullstack JavaScript</Subtitles>
                        <HireMe>Contratame</HireMe>
                    </div>
                </Overlay>
        </HomeSection>
    )
}

export default Home