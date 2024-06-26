import React, { Component } from 'react'
import './partStyle.css';
import { assets } from '../../../assets/assets'
export const Suggestion = ({ userHistoryPrompts }) => {
  return (
    <div className="cards-container">
      {userHistoryPrompts && userHistoryPrompts.map((item, index) => (
        <>
          {index < 4 && (
            <div className="card" key={index}>
              <p>{item.prompt}</p>
              <img src={assets.compass_icon} alt="" />
            </div>
          )}
        </>
      ))}
    </div>
  )
}



