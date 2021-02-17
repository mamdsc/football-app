import React, { memo } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useTeams } from '../../../hooks/useTeam';
import CardPlayer from './cardPlayer';

export const ListPlayer: React.FC = memo(() => {
  const { dataPlayers } = useTeams();

  return (
    <div style={{ height: 500, overflow: 'auto' }}>
      <div style={{ overflow: 'hidden', clear: 'both' }}>
        {dataPlayers.map(({
          name, age, nacionality, position,
        }) => (
          <CardPlayer
            name={name}
            nacionality={nacionality}
            age={age}
            type={position}
            key={uuidv4()}
          />
        ))}
      </div>
    </div>
  );
});

export default ListPlayer;
