import React from 'react'
import more from '../../assets/images/icon-more-vertical.png'

const ChatsHeader = () => {
  return (
    <div className='sch-chats-header'>
      <div className='sch-chats-header-avatar'></div>
      <div className='sch-chats-header-contact_block'>
        <h2 className='sch-chats-header-contact'>Dariene Robertson</h2>
        <p className='sch-chats-header-typing'>Typing...</p>
      </div>
      <div className='sch-chats-header-communicate'>
        <span className='icon-Call img'>
          <span className='path1' />
          <span className='path2' />
        </span>
        <span className='icon-video-camera img'>
          <span className='path1' />
          <span className='path2' />
        </span>
        <img src={more} alt='more' />
      </div>
    </div>
  )
}

export default ChatsHeader
