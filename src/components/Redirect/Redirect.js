import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    width: 100%;
    height: 15rem;
    background-color: red;
    color: white;
    font-size: 2rem;

    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;

    /* From https://css.glass */
    background: rgba(255, 0, 0, 0.07);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.25);
    backdrop-filter: blur(11.5px);
    -webkit-backdrop-filter: blur(11.5px);
    border: 1px solid rgba(255, 0, 0, 1);
`
const Link = styled.a`
    color: #7dd3fc;
    padding-left: 0.5rem;
    text-decoration: underline;
`
function Redirect() {
  return (
    <Container>
        This site no longer maintained Check updated Version at 
        <Link href="https://daffaaditya.netlify.app/" target="_blank" rel="noreferrer">daffaaditya.netlify.app</Link>
    </Container>
  )
}

export default Redirect