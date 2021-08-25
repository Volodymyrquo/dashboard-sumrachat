import React from 'react'
import './assets/scss/styles.scss'
import { Header, MainContent, NavigagionSidebar, Chats } from './components'

const App = () => {
  return (
    <div>
      <Header />
      <NavigagionSidebar />
      <Chats />
    </div>
  )
}

export default App
