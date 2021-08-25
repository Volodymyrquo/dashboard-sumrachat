import React from 'react'
import addButton from '../../assets/images/Add-button.png'
import ChatsContact from './ChatsContact'

const ChatsNavbar = () => {
  return (
    <div className='sch-chats-navbar'>
      <div className='sch-chats-navbar-contacts'>
        <span>Contacts</span>
      </div>
      <img src={addButton} alt='add button' />
      <div className='sch-chats-navbar-contacts_block'>
        <ChatsContact />
        <ChatsContact />
      </div>
    </div>
  )
}

export default ChatsNavbar
