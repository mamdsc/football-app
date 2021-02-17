import React, { useCallback, useEffect, useState } from 'react';
import { Container, AvatarCircle } from './styled';
import { useTeams } from '../../../hooks/useTeam';

const PickedPlayer: React.FC = () => {
  const [mostPickedPlayer, setMostPickedPlayer] = useState<string>();
  const [lessPickedPlayer, setLessPickedPlayer] = useState<string>();

  const { dataTeams } = useTeams();

  const searchMostPickerPlayer = useCallback(() => {
    const players: string[] = [];

    dataTeams?.map((team) => team.players?.map((player) => players.push(player.name)));

    const result = players.reduce((appearances: any, player) => {
      appearances[player] = Number(appearances[player]) + 1 || 1;
      return appearances;
    }, {});

    const sortResult = Object.keys(result).sort((a, b) => {
      if (result[a] > result[b]) {
        return -1;
      }

      if (result[b] > result[a]) {
        return 1;
      }

      return 0;
    });

    setMostPickedPlayer(sortResult[0]);
    setLessPickedPlayer(sortResult[sortResult.length - 1]);
  }, [dataTeams]);

  useEffect(() => {
    searchMostPickerPlayer();
  }, [searchMostPickerPlayer]);

  return (
    <Container>
      <div>
        Most picked player
        <AvatarCircle>
          <strong>{mostPickedPlayer}</strong>
        </AvatarCircle>
      </div>
      <div>
        Less picked player
        <AvatarCircle>
          <strong>{lessPickedPlayer}</strong>
        </AvatarCircle>
      </div>
    </Container>
  );
};

export default PickedPlayer;
