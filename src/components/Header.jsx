import React from 'react'
import Avatars from '../assets/images/Avatars.png'
import settings from '../assets/images/Settings#1.png'
import dialNumbers from '../assets/images/Dial-numbers.png'
import bell from '../assets/images/bell.png'

const Header = () => {
  return (
    <div className='header'>
      <span className='header-text'>Chats</span>
      <input className='header-search' type='text' placeholder='Search...' />
      <div className='header-info'>
        <img
          src={dialNumbers}
          className='header-info-settings'
          alt='dial numbers'
        />
        <img src={bell} className='header-info-settings' alt='bell' />
        <img src={settings} className='header-info-settings' alt='settings' />
        <img src={Avatars} className='header-info-avatar' alt='avatar' />
      </div>
    </div>
  )
}

export default Header
