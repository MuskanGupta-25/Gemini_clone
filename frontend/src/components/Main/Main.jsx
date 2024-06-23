import React, { useContext, useEffect, useState } from 'react'
import './Main.css'
import { assets } from '../../assets/assets'
import { Context } from '../../context/Context'
import { Greeting } from './parts/Greeting'
import { Suggestion } from './parts/Suggestion'
import { HeaderLogo } from './parts/HeaderLogo'
import { ResultTab } from './parts/ResultTab'
const Main = () => {
    const { onSent, recentPrompt, showResult, loading, resultData, setInput, input, fetchUserPrompts, fetchUserName } = useContext(Context)
    const [userHistoryPrompts, setUserHistoryPrompts] = useState([]);
    const [userName, setUserName] = useState({});

    useEffect(() => {

        const fetchData = async () => {
            const userName = await fetchUserName();
            console.log(userName)
            setUserName(userName);
            const history = await fetchUserPrompts();
            setUserHistoryPrompts(history);
        };

        if (userHistoryPrompts.length === 0) {
            fetchData();
        }
    }, [userHistoryPrompts]); // Include userHistoryPrompts in the dependency array if needed

    return (
        <div className='main'>
            <HeaderLogo />
            <div className="main-container">
                {!showResult ? <>
                    {userName && (
                        <Greeting userName={userName} />
                    )}
                    {userHistoryPrompts && (
                        <Suggestion userHistoryPrompts={userHistoryPrompts} />

                    )}
                </> :
                    <ResultTab recentPrompt={recentPrompt} loading={loading} resultData={resultData} />
                }

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
            </div>
        </div>
    )
}

export default Main
