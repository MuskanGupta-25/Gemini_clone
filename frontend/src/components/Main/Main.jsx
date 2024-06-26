import React, { useContext, useEffect, useState } from 'react'
import './Main.css'
import { Context } from '../../context/Context'
import { Greeting } from './parts/Greeting'
import { Suggestion } from './parts/Suggestion'
import { HeaderLogo } from './parts/HeaderLogo'
import { ResultTab } from './parts/ResultTab'
import { InputTab } from './parts/InputTab'
import LoginSignup from './parts/LoginSignup'

const Main = () => {
    const { onSent, recentPrompt, showResult, loading, resultData, setInput, input, fetchUserPrompts, fetchUserName } = useContext(Context)
    const [userHistoryPrompts, setUserHistoryPrompts] = useState([]);
    const [userName, setUserName] = useState({});
    const [showLoginSignup, setShowLoginSignup] = useState(false);

    const toggleLoginSignup = () => {
        setShowLoginSignup(prevState => !prevState);
    };

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
            <HeaderLogo toggleLoginSignup={toggleLoginSignup} />
            {showLoginSignup ? (
                <LoginSignup />
            ) : (
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
                    <InputTab />
                </div>
            )}
        </div>
    )
}

export default Main

