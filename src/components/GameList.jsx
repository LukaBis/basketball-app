import React from 'react';
import { Typography } from '@mui/material';
import Game from './Game';
import { useGetGamesQuery } from '../services/basketballAPI';
import '../css/GameList.css';

function GameList() {

    const { data, error, isLoading, isFetching, isSuccess } = useGetGamesQuery();
    
    if (isFetching || isLoading) return 'Loading ...';

    console.log(data.response);

    return (
        <div className='game-list'>
            <Typography paragraph={true}>Today's Games</Typography>
            {
                data.response.map(game => (
                    <Game 
                        scores={game.scores}
                        teams={game.teams}
                        status={game.status}
                        time={game.time}
                    />
                ))
            }
        </div>
    )
}

export default GameList