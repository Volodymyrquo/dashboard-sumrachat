import React from 'react'
import './assets/scss/styles.scss'
import { Header, MainContent, NavigagionSidebar } from './components'

const App = () => {
  return (
    <div>
      <Header />
      <NavigagionSidebar />
      <MainContent />
    </div>
  )
}

export default App
