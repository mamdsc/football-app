import React, {
  useCallback, useEffect, useRef, useState,
} from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import * as Yup from 'yup';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import { v4 as uuidv4 } from 'uuid';
import Button from '../../components/button';
import { ITeam, useTeams } from '../../hooks/useTeam';
import Position from './position';
import Search from './search';
import { FormContainer, Container, Error } from './styled';
import ListPlayer from './list/listPlayer';
import InputContainer from '../../components/input';
import RadioGroup from '../../components/radio';
import getValidationError from '../../utils/getValidationError';
import Tags from './tags';

interface MatchParams {
  id: string;
}

const Team: React.FC = () => {
  const [existTeam, setExistTeam] = useState<ITeam>();
  const [tacticalScheme, setTacticalScheme] = useState<string>('');
  const [errorPlayers, setErrorPlayers] = useState<string>('');
  const [errorTacticalScheme, setErrorTacticalScheme] = useState<string>('');

  const formRef = useRef<FormHandles>(null);
  const history = useHistory();
  const match = useRouteMatch<MatchParams>();

  const {
    isLoading,
    dataTags,
    dataPlayers,
    updateTeam,
    getById,
    createTeam,
  } = useTeams();

  const teamById = useCallback(() => getById(match.params.id), [getById, match.params.id]);

  useEffect(() => {
    const response = teamById();
    setExistTeam(response);

    if (response.tacticalScheme) {
      setTacticalScheme(response.tacticalScheme);
    }
  }, [match, teamById]);

  const handleSubmit = useCallback(
    async (data: ITeam) => {
      try {
        formRef.current?.setErrors({});
        setErrorPlayers('');
        setErrorTacticalScheme('');

        const schema = Yup.object().shape({
          name: Yup.string().required('Name required'),
          description: Yup.string().required('Description required'),
          website: Yup.string().url('This url is invalid'),
          tacticalScheme: !tacticalScheme ? Yup.string().required('Tactical scheme required') : Yup.string().optional(),
          players:
            (dataPlayers.length < 11 || dataPlayers.length > 11) ? Yup.string().required('Select 11 players') : Yup.string().optional(),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        if (data.teamType === undefined) {
          data.teamType = 'Fantasy';
        }

        if (existTeam && Object.keys(existTeam).length > 0) {
          const updateData: ITeam = {
            id: existTeam.id,
            key: existTeam.key,
            name: data.name,
            description: data.description,
            website: data.website,
            teamType: data.teamType,
            tacticalScheme,
            players: dataPlayers,
            tags: dataTags,
          };
          updateTeam(updateData, existTeam.id);
        } else {
          const newTeam: ITeam = {
            id: uuidv4(),
            key: uuidv4(),
            name: data.name,
            description: data.description,
            website: data.website,
            teamType: data.teamType,
            tacticalScheme,
            players: dataPlayers,
            tags: dataTags,
          };
          createTeam(newTeam);
          history.push('/football-app');
        }
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationError(err);
          formRef.current?.setErrors(errors);
          if (errors.players) {
            setErrorPlayers(errors.players);
          }

          if (errors.tacticalScheme) {
            setErrorTacticalScheme(errors.tacticalScheme);
          }
        }
      }
    },
    [history, tacticalScheme, dataPlayers, dataTags, existTeam, createTeam, updateTeam],
  );

  return (
    <Container>
      <div>
        <h2>Create your teams</h2>
        <Button
          type="button"
          onClick={() => history.push('/football-app')}
          width="100px"
        >
          Voltar
        </Button>
      </div>
      <div className="box">
        <h1>TEAM INFORMATION</h1>
        <FormContainer>
          <Form
            ref={formRef}
            onSubmit={handleSubmit}
            initialData={{ checkbox: ['fantasy'] }}
          >
            <div>
              <div>
                <InputContainer
                  title="Team name"
                  placeholder="Insert team name"
                  name="name"
                  defaultValue={existTeam ? existTeam.name : undefined}
                />
                <InputContainer
                  title="Description"
                  name="description"
                  defaultValue={existTeam ? existTeam.description : undefined}
                  height={200}
                />
              </div>
              <div>
                <InputContainer
                  title="Website"
                  name="website"
                  placeholder="http://myteam.com"
                  defaultValue={existTeam ? existTeam.website : undefined}
                />
                <h4>Team type</h4>
                <RadioGroup
                  name="teamType"
                  selected={existTeam ? existTeam.teamType : 'Fantasy'}
                />
                <h4>Tags</h4>
                <Tags />
              </div>
            </div>

          </Form>
        </FormContainer>
      </div>
      <div className="box">
        <h1>CONFIGURE SQUAD</h1>
        <DndProvider backend={HTML5Backend}>
          <div className="squad">
            <div>
              {errorTacticalScheme && <Error>{errorTacticalScheme}</Error>}
              <Position
                taticalSchemaSelected={(e) => setTacticalScheme(e)}
                defaultValue={existTeam?.tacticalScheme}
              />

            </div>
            <div className="search-players">
              <h4>Search Players</h4>
              {errorPlayers && <Error>{errorPlayers}</Error>}
              <Search disabled={!tacticalScheme} />
              <ListPlayer />
            </div>
          </div>
        </DndProvider>
        <div className="btn-save">
          <Button
            type="submit"
            width="260px"
            onClick={() => formRef.current?.submitForm()}
            loading={isLoading}
          >
            Save
          </Button>
        </div>
      </div>
    </Container>
  );
};

export default Team;
