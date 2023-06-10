import React from 'react'
import Players from './Players'

const Playerlist = ({playertab }) => {
  return (
    <div> {playertab.map((player, index) => <Players tab={ player} /> )}</div>
  )
}

export default Playerlist