import { AxiosResponse } from 'axios';
import api from './api';

export interface IPlayer {
  player_id: number;
  player_name: string;
  firstname: string;
  lastname: string;
  number: number;
  position: string;
  age: number;
  birth_date: string;
  birth_place: string;
  birth_country: string;
  nationality: string;
  height: string;
  weight: string;
}

interface IPlayerResponse {
  api: {
    results: number;
    players: IPlayer[];
  };
}

const PlayersService = {
  async getPlayersByLastName(
    lastname: string,
  ): Promise<AxiosResponse<IPlayerResponse>> {
    return api.get(`players/search/${lastname}`);
  },
};

export default PlayersService;
