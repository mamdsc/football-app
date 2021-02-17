import React, { useCallback, useEffect, useState } from 'react';
import update from 'immutability-helper';
import { v4 as uuidv4 } from 'uuid';
import ItemPosition from '../ItemPosition';
import {
  Attackers,
  Middle,
  Defenders,
  Goalkeeper,
} from './styled';
import { IFormation } from './availableFormations';
import PlayerType from './playerType';

interface IProps {
  formation: IFormation[]
}

const Formation: React.FC<IProps> = ({ formation }) => {
  const [formationItem, setFormationItems] = useState<IFormation[]>(formation);
  const [droppedBoxNames, setDroppedBoxNames] = useState<string[]>([]);

  useEffect(() => {
    if (formation) {
      setFormationItems(formation);
    }
  }, [formation]);

  const handleDrop = useCallback(
    (index: number, item: { name: string; }) => {
      const { name } = item;
      setDroppedBoxNames(
        update(droppedBoxNames, name ? { $push: [name] } : { $push: [] }),
      );
      setFormationItems(
        update(formationItem, {
          [index]: {
            lastDroppedItem: {
              $set: item,
            },
          },
        }),
      );
    },
    [droppedBoxNames, formationItem],
  );

  return (
    <div>
      <Attackers>
        {formationItem && formationItem.map(({ accepts, lastDroppedItem }, index) => {
          if (accepts === PlayerType.ATTACKERS) {
            return (
              <ItemPosition
                accept={accepts}
                lastDroppedItem={lastDroppedItem}
                onDrop={(item) => handleDrop(index, item)}
                key={uuidv4()}
              />
            );
          }
          return null;
        })}
      </Attackers>
      <Middle>
        {formationItem && formationItem.map(({ accepts, lastDroppedItem }, index) => {
          if (accepts === PlayerType.MIDDLE) {
            return (
              <ItemPosition
                accept={accepts}
                lastDroppedItem={lastDroppedItem}
                onDrop={(item) => handleDrop(index, item)}
                key={uuidv4()}
              />
            );
          }
          return null;
        })}
      </Middle>
      <Defenders>
        {formationItem && formationItem.map(({ accepts, lastDroppedItem }, index) => {
          if (accepts === PlayerType.DEFENDER) {
            return (
              <ItemPosition
                accept={accepts}
                lastDroppedItem={lastDroppedItem}
                onDrop={(item) => handleDrop(index, item)}
                key={uuidv4()}
              />
            );
          }
          return null;
        })}
      </Defenders>
      <Goalkeeper>
        {formationItem && formationItem.map(({ accepts, lastDroppedItem }, index) => {
          if (accepts === PlayerType.GOALKEEPER) {
            return (
              <ItemPosition
                accept={accepts}
                lastDroppedItem={lastDroppedItem}
                onDrop={(item) => handleDrop(index, item)}
                key={uuidv4()}
              />
            );
          }
          return null;
        })}
      </Goalkeeper>
    </div>
  );
};
export default Formation;
