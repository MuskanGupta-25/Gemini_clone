// import React from 'react'
// import Sidebar from './components/Sidebar/Sidebar'
// import Main from './components/Main/Main'

// const App = () => {
//   return (
//     <>
//      <Sidebar/> 
//      <Main/>
//     </>
//   )
// }

// export default App

import React from 'react'
import Sidebar from './components/Sidebar/Sidebar'
import Main from './components/Main/Main'
import ContextProvider from './context/Context'

const App = () => {
  return (
    <ContextProvider>
      <Sidebar />
      <Main />
    </ContextProvider>
  )
}

export default App

