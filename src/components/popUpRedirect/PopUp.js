import React from 'react'
import styled from 'styled-components'
import { PopUpContainer } from './PopUpStyles'

function popUp() {
  return (
    <PopUpContainer>
      <div className="popUp">
        <span className="close">&times;</span>
        <h2>Hi, I'm Daffa Aditya Rahman</h2>
        <p>Front-end Developer</p>
        <button className="btn">Close</button>
      </div>
    </PopUpContainer>
  )
}

export default popUp