import PlayerType from './playerType';

export interface IFormation {
  accepts: string
  lastDroppedItem: { name: string } | null
}

const FORMATION_3223: IFormation[] = [
  { accepts: PlayerType.ATTACKERS, lastDroppedItem: null },
  { accepts: PlayerType.ATTACKERS, lastDroppedItem: null },
  { accepts: PlayerType.ATTACKERS, lastDroppedItem: null },
  { accepts: PlayerType.MIDDLE, lastDroppedItem: null },
  { accepts: PlayerType.MIDDLE, lastDroppedItem: null },
  { accepts: PlayerType.MIDDLE, lastDroppedItem: null },
  { accepts: PlayerType.MIDDLE, lastDroppedItem: null },
  { accepts: PlayerType.DEFENDER, lastDroppedItem: null },
  { accepts: PlayerType.DEFENDER, lastDroppedItem: null },
  { accepts: PlayerType.DEFENDER, lastDroppedItem: null },
  { accepts: PlayerType.GOALKEEPER, lastDroppedItem: null },
];

const FORMATION_3241: IFormation[] = [
  { accepts: PlayerType.ATTACKERS, lastDroppedItem: null },
  { accepts: PlayerType.ATTACKERS, lastDroppedItem: null },
  { accepts: PlayerType.ATTACKERS, lastDroppedItem: null },
  { accepts: PlayerType.MIDDLE, lastDroppedItem: null },
  { accepts: PlayerType.MIDDLE, lastDroppedItem: null },
  { accepts: PlayerType.MIDDLE, lastDroppedItem: null },
  { accepts: PlayerType.MIDDLE, lastDroppedItem: null },
  { accepts: PlayerType.MIDDLE, lastDroppedItem: null },
  { accepts: PlayerType.MIDDLE, lastDroppedItem: null },
  { accepts: PlayerType.DEFENDER, lastDroppedItem: null },
  { accepts: PlayerType.GOALKEEPER, lastDroppedItem: null },
];

const FORMATION_343: IFormation[] = [
  { accepts: PlayerType.ATTACKERS, lastDroppedItem: null },
  { accepts: PlayerType.ATTACKERS, lastDroppedItem: null },
  { accepts: PlayerType.ATTACKERS, lastDroppedItem: null },
  { accepts: PlayerType.MIDDLE, lastDroppedItem: null },
  { accepts: PlayerType.MIDDLE, lastDroppedItem: null },
  { accepts: PlayerType.MIDDLE, lastDroppedItem: null },
  { accepts: PlayerType.MIDDLE, lastDroppedItem: null },
  { accepts: PlayerType.DEFENDER, lastDroppedItem: null },
  { accepts: PlayerType.DEFENDER, lastDroppedItem: null },
  { accepts: PlayerType.DEFENDER, lastDroppedItem: null },
  { accepts: PlayerType.GOALKEEPER, lastDroppedItem: null },
];

const FORMATION_352: IFormation[] = [
  { accepts: PlayerType.ATTACKERS, lastDroppedItem: null },
  { accepts: PlayerType.ATTACKERS, lastDroppedItem: null },
  { accepts: PlayerType.ATTACKERS, lastDroppedItem: null },
  { accepts: PlayerType.MIDDLE, lastDroppedItem: null },
  { accepts: PlayerType.MIDDLE, lastDroppedItem: null },
  { accepts: PlayerType.MIDDLE, lastDroppedItem: null },
  { accepts: PlayerType.MIDDLE, lastDroppedItem: null },
  { accepts: PlayerType.MIDDLE, lastDroppedItem: null },
  { accepts: PlayerType.DEFENDER, lastDroppedItem: null },
  { accepts: PlayerType.DEFENDER, lastDroppedItem: null },
  { accepts: PlayerType.GOALKEEPER, lastDroppedItem: null },
];

const FORMATION_4231: IFormation[] = [
  { accepts: PlayerType.ATTACKERS, lastDroppedItem: null },
  { accepts: PlayerType.ATTACKERS, lastDroppedItem: null },
  { accepts: PlayerType.ATTACKERS, lastDroppedItem: null },
  { accepts: PlayerType.ATTACKERS, lastDroppedItem: null },
  { accepts: PlayerType.MIDDLE, lastDroppedItem: null },
  { accepts: PlayerType.MIDDLE, lastDroppedItem: null },
  { accepts: PlayerType.MIDDLE, lastDroppedItem: null },
  { accepts: PlayerType.MIDDLE, lastDroppedItem: null },
  { accepts: PlayerType.MIDDLE, lastDroppedItem: null },
  { accepts: PlayerType.DEFENDER, lastDroppedItem: null },
  { accepts: PlayerType.GOALKEEPER, lastDroppedItem: null },
];

const FORMATION_4312: IFormation[] = [
  { accepts: PlayerType.ATTACKERS, lastDroppedItem: null },
  { accepts: PlayerType.ATTACKERS, lastDroppedItem: null },
  { accepts: PlayerType.ATTACKERS, lastDroppedItem: null },
  { accepts: PlayerType.ATTACKERS, lastDroppedItem: null },
  { accepts: PlayerType.MIDDLE, lastDroppedItem: null },
  { accepts: PlayerType.MIDDLE, lastDroppedItem: null },
  { accepts: PlayerType.MIDDLE, lastDroppedItem: null },
  { accepts: PlayerType.MIDDLE, lastDroppedItem: null },
  { accepts: PlayerType.DEFENDER, lastDroppedItem: null },
  { accepts: PlayerType.DEFENDER, lastDroppedItem: null },
  { accepts: PlayerType.GOALKEEPER, lastDroppedItem: null },
];

const FORMATION_433: IFormation[] = [
  { accepts: PlayerType.ATTACKERS, lastDroppedItem: null },
  { accepts: PlayerType.ATTACKERS, lastDroppedItem: null },
  { accepts: PlayerType.ATTACKERS, lastDroppedItem: null },
  { accepts: PlayerType.ATTACKERS, lastDroppedItem: null },
  { accepts: PlayerType.MIDDLE, lastDroppedItem: null },
  { accepts: PlayerType.MIDDLE, lastDroppedItem: null },
  { accepts: PlayerType.MIDDLE, lastDroppedItem: null },
  { accepts: PlayerType.DEFENDER, lastDroppedItem: null },
  { accepts: PlayerType.DEFENDER, lastDroppedItem: null },
  { accepts: PlayerType.DEFENDER, lastDroppedItem: null },
  { accepts: PlayerType.GOALKEEPER, lastDroppedItem: null },
];

const FORMATION_442: IFormation[] = [
  { accepts: PlayerType.ATTACKERS, lastDroppedItem: null },
  { accepts: PlayerType.ATTACKERS, lastDroppedItem: null },
  { accepts: PlayerType.ATTACKERS, lastDroppedItem: null },
  { accepts: PlayerType.ATTACKERS, lastDroppedItem: null },
  { accepts: PlayerType.MIDDLE, lastDroppedItem: null },
  { accepts: PlayerType.MIDDLE, lastDroppedItem: null },
  { accepts: PlayerType.MIDDLE, lastDroppedItem: null },
  { accepts: PlayerType.MIDDLE, lastDroppedItem: null },
  { accepts: PlayerType.DEFENDER, lastDroppedItem: null },
  { accepts: PlayerType.DEFENDER, lastDroppedItem: null },
  { accepts: PlayerType.GOALKEEPER, lastDroppedItem: null },
];

const FORMATION_451: IFormation[] = [
  { accepts: PlayerType.ATTACKERS, lastDroppedItem: null },
  { accepts: PlayerType.ATTACKERS, lastDroppedItem: null },
  { accepts: PlayerType.ATTACKERS, lastDroppedItem: null },
  { accepts: PlayerType.ATTACKERS, lastDroppedItem: null },
  { accepts: PlayerType.MIDDLE, lastDroppedItem: null },
  { accepts: PlayerType.MIDDLE, lastDroppedItem: null },
  { accepts: PlayerType.MIDDLE, lastDroppedItem: null },
  { accepts: PlayerType.MIDDLE, lastDroppedItem: null },
  { accepts: PlayerType.MIDDLE, lastDroppedItem: null },
  { accepts: PlayerType.DEFENDER, lastDroppedItem: null },
  { accepts: PlayerType.GOALKEEPER, lastDroppedItem: null },
];

const FORMATION_541: IFormation[] = [
  { accepts: PlayerType.ATTACKERS, lastDroppedItem: null },
  { accepts: PlayerType.ATTACKERS, lastDroppedItem: null },
  { accepts: PlayerType.ATTACKERS, lastDroppedItem: null },
  { accepts: PlayerType.ATTACKERS, lastDroppedItem: null },
  { accepts: PlayerType.ATTACKERS, lastDroppedItem: null },
  { accepts: PlayerType.MIDDLE, lastDroppedItem: null },
  { accepts: PlayerType.MIDDLE, lastDroppedItem: null },
  { accepts: PlayerType.MIDDLE, lastDroppedItem: null },
  { accepts: PlayerType.MIDDLE, lastDroppedItem: null },
  { accepts: PlayerType.DEFENDER, lastDroppedItem: null },
  { accepts: PlayerType.GOALKEEPER, lastDroppedItem: null },
];

export {
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
};
