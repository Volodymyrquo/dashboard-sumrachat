import React from 'react'

const ChatsContact = ({ item }) => {
  return (
    <div className='sch-chats_contact'>
      <div
        className='sch-chats_contact-avatar'
        style={{ background: `url(${item.avatar})` }}></div>
      <h2>{item.name}</h2>
      <p>{item.phrase}</p>
    </div>
  )
}

export default ChatsContact
