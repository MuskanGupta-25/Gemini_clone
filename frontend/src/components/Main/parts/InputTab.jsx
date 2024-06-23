import React, { useContext, useEffect, useState } from 'react'
import { assets } from '../../../assets/assets'
import { Context } from '../../../context/Context'
import './partStyle.css'
export const InputTab = () => {
  const { onSent, recentPrompt, showResult, loading, resultData, setInput, input, fetchUserPrompts, fetchUserName } = useContext(Context)
  return (
    <>
      <div className="main-bottom">
        <div className="search-box">
          <input
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault(); // Prevents the default behavior of submitting the form
                onSent(); // Calls the onSent function
              } else if (e.key === 'Enter' && e.shiftKey) {
                // Insert a newline character in the input value
                setInput(prevInput => prevInput + '\n');
              }
            }}
            value={input}
            type="text"
            placeholder="Enter a prompt here"
          />
          <div>
            <img src={assets.gallery_icon} alt="" />
            <img src={assets.mic_icon} alt="" />
            {input ? <img onClick={() => onSent()} src={assets.send_icon} alt="" /> : null}
          </div>

        </div>
        <p className='bottom-info'>
          Gemini may display inaccurate info, including about people, so double-check its responses. Your privacy and Gemini Apps.
        </p>
      </div>
    </>
  )
}
