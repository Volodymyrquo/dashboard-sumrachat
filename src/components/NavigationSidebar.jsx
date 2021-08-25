import React from 'react'
import referrals from '../assets/images/referrals.png'
import sumraLogo from '../assets/images/sumra-logo.svg'

const NavigationSidebar = () => {
  return (
    <nav className='nav-bar'>
      <div className='nav-bar-logo-block'>
        <img src={sumraLogo} alt='logo' />
        <span> Sumrachat</span>
      </div>
      <h2>personal</h2>
      <ul>
        <li className='active'>
          <span className='icon-Group-chat img'>
            <span className='path1 orange-dark' />
            <span className='path2 orange-light' />
          </span>

          <span className='text'>chats</span>
        </li>
        <li>
          <span className='icon-Settings-switch img'>
            <span className='path1 grey' />
            <span className='path2 grey' />
          </span>
          <span className='text'>settings</span>
        </li>
      </ul>
      <h2>services</h2>
      <ul>
        <li className='active'>
          <span className='icon-Group img'>
            <span className='path1 grey' />
            <span className='path2 grey' />
          </span>
          <span className='text'>referrals</span>
        </li>
        <li>
          <span className='icon-Half-start img'>
            <span className='path1 grey' />
            <span className='path2 grey' />
          </span>
          <span className='text'>rewards</span>
        </li>
        <li>
          <span className='icon-Divits img'>
            <span className='path1 grey' />
            <span className='path2 grey' />
            <span className='path3 grey' />
            <span className='path4 grey' />
            <span className='path5 grey' />
            <span className='path6 grey' />
            <span className='path7 grey' />
            <span className='path8 grey' />
          </span>
          <span className='text'>divits bonus plaza</span>
        </li>
        <li>
          <span className='icon-Money img'>
            <span className='path1 grey' />
            <span className='path2 grey' />
          </span>
          <span className='text'> global earnings</span>
        </li>
        <li>
          <span className='icon-Weight img'>
            <span className='path1 grey' />
            <span className='path2 grey' />
          </span>
          <span className='text'>leaderboard</span>
        </li>
        <li>
          <span className='icon-Chart-pie img'>
            <span className='path1 grey' />
            <span className='path2 grey' />
          </span>
          <span className='text'>statistics</span>
        </li>
        <li>
          <span className='icon-Adress-book img'>
            <span className='path1 grey' />
            <span className='path2 grey' />
          </span>
          <span className='text'>contact book</span>
        </li>
        <li>
          <span className='icon-Sale img'>
            <span className='path1 grey' />
            <span className='path2 grey' />
          </span>
          <span className='text'>pioneer membership</span>
        </li>
      </ul>
      <div className='nav-bar-referrals'>
        <img src={referrals} alt='Get earn' />
        <div className='nav-bar-earn'>
          <span>
            Get up to <span>$250</span> for Referrals. <br /> Earn Unlimited.
          </span>
        </div>
        <button className='nav-bar-button'>
          <span>Learn more -&gt;</span>
        </button>
      </div>
    </nav>
  )
}

export default NavigationSidebar
