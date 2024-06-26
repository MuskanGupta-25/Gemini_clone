import React from 'react'
import { assets } from '../../../assets/assets'
import './partStyle.css'

export const HeaderLogo = ({ toggleLoginSignup }) => {
  return (
    <div className="nav">
      <p>Gemini</p>
      <img src={assets.user_icon} alt="" onClick={toggleLoginSignup} />
    </div>
  )
}

