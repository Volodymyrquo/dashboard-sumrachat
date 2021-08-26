import React from 'react'
import { Switch, Route } from 'react-router-dom'
import './assets/scss/styles.scss'
import {
  Header,
  NavigagionSidebar,
  Chats,
  Settings,
  DivitsBonusPlaza,
} from './components'
import Referrals from 'component-referrals'
import GlobalEarnings from 'global-earnings'
import Statistics from 'global-earnings'
import Leaderboard from 'leaderboard'
import PioneerMembership from 'pioneer-membership'

const App = () => {
  return (
    <div>
      <Header />
      <NavigagionSidebar />
      <div className='sch-main-block'>
        <Switch>
          <Route path='/chats' component={Chats} />
          <Route path='/divits-bonus-plaza' component={DivitsBonusPlaza} />
          <Route path='/settings' component={Settings} />
          <Route path='/referrals' component={Referrals} />
          <Route path='/global-earnings' render={() => <GlobalEarnings />} />
          <Route path='/leaderboard' component={Leaderboard} />
          <Route path='/statistics' component={Statistics} />
          <Route path='/pioneer-membership' component={PioneerMembership} />
        </Switch>
      </div>
    </div>
  )
}

export default App
