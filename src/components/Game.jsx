import React from 'react';
import { Typography } from '@mui/material';
import '../css/Game.css';

function Game({ teams, scores, status, time }) {
  return (
    <div className='game'>
        <div className='team'>
            <img src={teams.home.logo} />
            <Typography paragraph={true} className='team-name'>
                {teams.home.name}
            </Typography>
            <Typography className='score' paragraph={true}>{scores.home.total}</Typography>
        </div>
        <div className='status'>
            <Typography paragraph={true}>
                {status.long}<br />
                {time}
            </Typography>
        </div>
        <div className='team'>
            <img src={teams.away.logo} />
            <Typography paragraph={true} className='team-name'>
                {teams.away.name}
            </Typography>
            <Typography className='score' paragraph={true}>{scores.away.total}</Typography>
        </div>
    </div>
  )
}

export default Game