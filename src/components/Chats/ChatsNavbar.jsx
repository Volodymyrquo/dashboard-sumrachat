import React from 'react'
import { v4 as uuidv4 } from 'uuid'
import addButton from '../../assets/images/Add-button.png'
import ChatsContact from './ChatsContact'
import { contacts } from '../../helpers/contacts'

const ChatsNavbar = () => {
  return (
    <div className='sch-chats-navbar'>
      <div className='sch-chats-navbar-contacts'>
        <span>Contacts</span>
      </div>
      <img src={addButton} alt='add button' />
      <div className='sch-chats-navbar-contacts_block'>
        {contacts.map((item) => (
          <ChatsContact key={uuidv4()} item={item} />
        ))}
      </div>
    </div>
  )
}

export default ChatsNavbar
