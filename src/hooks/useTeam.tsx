import React, {
  createContext,
  useCallback,
  useState,
  useContext,
} from 'react';
import produce from 'immer';

export interface IInfoPlayer {
  id: string;
  name: string;
  age: number;
  nacionality: string;
  position: string;
}
export interface ITeam {
  id: string;
  key: string;
  name: string;
  description: string;
  website: string;
  teamType: 'Real' | 'Fantasy';
  tacticalScheme: string;
  players: IInfoPlayer[];
  tags: string[];
}

interface ITeamContext {
  dataTeams: ITeam[];
  dataPlayers: IInfoPlayer[];
  dataTags: string[];
  isLoading: boolean;
  createTeam(data: ITeam): void;
  deleteTeam(id: string): void;
  updateTeam(data: ITeam, id: string): void;
  getById(id: string): ITeam;
  updatePlayers(list: IInfoPlayer[]): void;
  updateTags(lsit: string[]): void;
}

const TeamContext = createContext<ITeamContext>({} as ITeamContext);

export const TeamProvider: React.FC = ({ children }) => {
  const [isLoading, setLoading] = useState<boolean>(false);
  const [dataPlayers, setDataPlayers] = useState<IInfoPlayer[]>([]);
  const [dataTags, setDataTags] = useState<string[]>([]);
  const [dataTeams, setDataAuth] = useState<ITeam[]>(() => {
    const teamsList = localStorage.getItem('@FootballApp:teams');

    if (teamsList) {
      return JSON.parse(teamsList);
    }

    return [];
  });

  const updateTags = (list: string[]) => {
    setDataTags(list);
  };

  const updatePlayers = (list: IInfoPlayer[]) => {
    setDataPlayers(list);
  };

  const createTeam = useCallback((data: ITeam) => {
    setLoading(true);
    const teamsList = localStorage.getItem('@FootballApp:teams');
    if (teamsList) {
      const parsed: ITeam[] = JSON.parse(teamsList);
      parsed.push({
        key: data.key,
        id: data.id,
        name: data.name,
        description: data.description,
        website: data.website,
        teamType: data.teamType,
        tacticalScheme: data.tacticalScheme,
        players: data.players,
        tags: data.tags,
      });
      setDataAuth(parsed);
      localStorage.setItem('@FootballApp:teams', JSON.stringify(parsed));
    } else {
      setDataAuth([data]);
      localStorage.setItem('@FootballApp:teams', JSON.stringify([data]));
    }
    setLoading(false);
  }, []);

  const deleteTeam = useCallback((id: string): ITeam[] => {
    setLoading(true);
    const teamsList = localStorage.getItem('@FootballApp:teams');
    if (teamsList) {
      const parsed: ITeam[] = JSON.parse(teamsList);
      const filterList: ITeam[] = parsed.filter((team) => team.id !== id);
      setDataAuth(filterList);
      localStorage.setItem('@FootballApp:teams', JSON.stringify(filterList));
      setLoading(false);
      return filterList;
    }
    setLoading(false);
    return [];
  }, []);

  const updateTeam = useCallback((data: ITeam, id: string) => {
    setLoading(true);
    const teamsList: ITeam[] = JSON.parse(
      localStorage.getItem('@FootballApp:teams') ?? '',
    );

    const myTeamIndex: number = teamsList.findIndex((team) => team.id === id);

    const nextState = produce(teamsList, (draftState) => {
      draftState[myTeamIndex].id = data.id;
      draftState[myTeamIndex].key = data.key;
      draftState[myTeamIndex].name = data.name;
      draftState[myTeamIndex].description = data.description;
      draftState[myTeamIndex].website = data.website;
      draftState[myTeamIndex].teamType = data.teamType;
      draftState[myTeamIndex].tacticalScheme = data.tacticalScheme;
      draftState[myTeamIndex].players = data.players;
      draftState[myTeamIndex].tags = data.tags;
    });

    setDataAuth(nextState);
    localStorage.setItem('@FootballApp:teams', JSON.stringify(nextState));
    setLoading(false);
  }, []);

  const getById = useCallback((id: string): ITeam => {
    const teamsList = localStorage.getItem('@FootballApp:teams');
    if (teamsList) {
      const parsed: ITeam[] = JSON.parse(teamsList);
      const filterList: ITeam | undefined = parsed.find((team) => team.id === id);
      setDataPlayers(filterList?.players || []);
      setDataTags(filterList?.tags || []);
      return filterList || ({} as ITeam);
    }
    return {} as ITeam;
  }, []);

  return (
    <TeamContext.Provider
      value={{
        dataTeams,
        dataPlayers,
        dataTags,
        isLoading,
        createTeam,
        deleteTeam,
        updateTeam,
        getById,
        updatePlayers,
        updateTags,
      }}
    >
      {children}
    </TeamContext.Provider>
  );
};

export function useTeams(): ITeamContext {
  const context = useContext(TeamContext);

  if (!context) {
    throw new Error('useTeams precisa ser usado com TeamProvider');
  }

  return context;
}
