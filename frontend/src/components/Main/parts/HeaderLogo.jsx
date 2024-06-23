import React, { Component } from 'react'
import { assets } from '../../../assets/assets'

export const HeaderLogo = () => {
  return (
    <div className="nav">
      <p>Gemini</p>
      <img src={assets.user_icon} alt="" />
    </div>
  )
}
