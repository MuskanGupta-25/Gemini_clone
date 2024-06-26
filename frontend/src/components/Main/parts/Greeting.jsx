import React, { Component } from 'react'
import './partStyle.css'
export const Greeting = ({userName}) => {
  return (
    <div className="greet">
      <p><span>Hello, {userName.userName}</span></p>
      <p>How can I help you today?</p>
    </div>
  )
}
