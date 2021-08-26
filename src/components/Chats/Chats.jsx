import React from 'react'
import ChatsHeader from './ChatsHeader'
import ChatsMessages from './ChatsMessages'
import ChatsNavbar from './ChatsNavbar'

const Chats = () => {
  return (
    <div className='sch-chats'>
      <ChatsNavbar />
      <ChatsHeader />
      <ChatsMessages />
    </div>
  )
}

export default Chats
