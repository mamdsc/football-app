import React, { useState } from 'react';
import debounce from 'lodash/debounce';
import { Select, Spin } from 'antd';
import PlayersService, { IPlayer } from '../../../services/players';
import Container from './styled';
import { IInfoPlayer, useTeams } from '../../../hooks/useTeam';

const { Option } = Select;

interface IProps {
  disabled: boolean;
}

const Search: React.FC<IProps> = ({ disabled }) => {
  const [playersOption, setPlayersOption] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const { updatePlayers } = useTeams();

  const playersSelected = (selectedOption: any) => {
    const alterOptions: IInfoPlayer[] = [];

    selectedOption.map((option: any) => (
      alterOptions.push(JSON.parse(option.value))
    ));

    updatePlayers(alterOptions);
    // jogadores selecionados
  };

  const handleSearch = debounce((value: string) => {
    setLoading(true);
    if (value) {
      PlayersService.getPlayersByLastName(value).then((response) => {
        if (response.data.api.players) {
          setPlayersOption(response.data.api.players);
        }
      }).finally(() => setLoading(false));
    }
  }, 800);

  return (
    <Container
      mode="multiple"
      disabled={disabled}
      labelInValue
      loading={loading}
      placeholder="Search players by lastname"
      notFoundContent={loading ? <Spin size="small" /> : null}
      filterOption={false}
      onSearch={handleSearch}
      onChange={(value: any) => playersSelected(value)}
      style={{ width: '100%' }}
      defaultActiveFirstOption={false}
    >
      {playersOption.map((player: IPlayer) => {
        const info = {
          id: player.player_id.toString(),
          name: `${player.firstname} ${player.lastname}`,
          nacionality: player.nationality,
          age: player.age,
          position: player.position,
        };
        return (
          <Option value={JSON.stringify(info)} key={player.player_id}>
            {`${player.firstname} - ${player.lastname}`}
          </Option>
        );
      })}
    </Container>
  );
};

export default Search;
