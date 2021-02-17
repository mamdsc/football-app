import React, { useCallback, useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Container, Tops, Title } from './styled';
import { useTeams } from '../../../hooks/useTeam';

interface IAvgProps {
  name: string,
  avg: string,
}

const Top: React.FC = () => {
  const [avgAgesByTeam, setAvgAgesByTeam] = useState<IAvgProps[]>([]);

  const { dataTeams } = useTeams();

  const calcAvgAgePlayers = useCallback(() => {
    const reducer = (accumulator: any, currentValue: any) => accumulator + currentValue;

    const avgs = dataTeams?.map((team) => {
      const arrayAges = team.players?.map((player) => player.age);
      const totalAge = arrayAges?.reduce(reducer);
      const avgAge = totalAge / arrayAges?.length;

      return {
        name: team.name,
        avg: avgAge.toFixed(1),
      };
    });

    const sortAvgs = avgs.sort((a, b) => Number(b.avg) - Number(a.avg));

    setAvgAgesByTeam(sortAvgs);
  }, [dataTeams]);

  useEffect(() => {
    calcAvgAgePlayers();
  }, [calcAvgAgePlayers]);

  return (
    <Container>
      <div>
        <Title>Top 5</Title>
      </div>
      <Tops>
        <div>
          <h3>Highest avg age</h3>
          <ul>
            {(avgAgesByTeam.slice(0, 5)).map((team) => (
              <li key={uuidv4()}>
                <span>{team.name}</span>
                <span>{team.avg}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3>Lowest avg age</h3>
          <ul>
            {(avgAgesByTeam.slice(-5)).map((team) => (
              <li key={uuidv4()}>
                <span>{team.name}</span>
                <span>{team.avg}</span>
              </li>
            ))}
          </ul>
        </div>
      </Tops>
    </Container>
  );
};

export default Top;
