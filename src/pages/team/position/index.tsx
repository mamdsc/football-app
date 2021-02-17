import React, { useEffect, useState } from 'react';
import { Select } from 'antd';
import { Container, FootballField } from './styled';
import Formation from './options/formation';
import {
  FORMATION_3223,
  FORMATION_3241,
  FORMATION_343,
  FORMATION_352,
  FORMATION_4231,
  FORMATION_4312,
  FORMATION_433,
  FORMATION_442,
  FORMATION_451,
  FORMATION_541,
} from './options/availableFormations';

const { Option } = Select;

const options: string[] = [
  '3 - 2 - 2 - 3',
  '3 - 2 - 4 - 1',
  '3 - 4 - 3',
  '3 - 5 - 2',
  '4 - 2 - 3 - 1',
  '4 - 3 - 1 - 2',
  '4 - 3 - 3',
  '4 - 4 - 2',
  '4 - 5 - 1',
  '5 - 4 - 1',
];
interface IProps {
  taticalSchemaSelected: (e: string) => void;
  defaultValue?: string;
}

const Position: React.FC<IProps> = ({ taticalSchemaSelected, defaultValue }) => {
  const [selectedPosition, setSelectedPosition] = useState<string>('');

  const renderPositions = (position: string): JSX.Element => {
    switch (position) {
      case '3 - 2 - 2 - 3':
        return <Formation formation={FORMATION_3223} />;
      case '3 - 2 - 4 - 1':
        return <Formation formation={FORMATION_3241} />;
      case '3 - 4 - 3':
        return <Formation formation={FORMATION_343} />;
      case '3 - 5 - 2':
        return <Formation formation={FORMATION_352} />;
      case '4 - 2 - 3 - 1':
        return <Formation formation={FORMATION_4231} />;
      case '4 - 3 - 1 - 2':
        return <Formation formation={FORMATION_4312} />;
      case '4 - 3 - 3':
        return <Formation formation={FORMATION_433} />;
      case '4 - 4 - 2':
        return <Formation formation={FORMATION_442} />;
      case '4 - 5 - 1':
        return <Formation formation={FORMATION_451} />;
      case '5 - 4 - 1':
        return <Formation formation={FORMATION_541} />;
      default:
        return <Formation formation={FORMATION_3223} />;
    }
  };

  useEffect(() => {
    if (defaultValue) {
      setSelectedPosition(defaultValue);
    }
  }, [defaultValue]);

  return (
    <Container>
      <div className="formation">
        <h4>Formation</h4>
        <Select
          showSearch
          style={{ width: 314 }}
          placeholder="Escolha o esquema tático"
          optionFilterProp="children"
          filterOption={(input, option) => (option && option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0) || false}
          onChange={(value: string) => {
            setSelectedPosition(value);
            taticalSchemaSelected(value);
          }}
          value={defaultValue || undefined}
        >
          {options.map((option) => (
            <Option value={option} key={option}>{option}</Option>
          ))}
        </Select>
      </div>
      <FootballField>
        {selectedPosition && renderPositions(selectedPosition)}
      </FootballField>
    </Container>
  );
};

export default Position;
