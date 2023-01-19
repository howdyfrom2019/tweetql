export interface LtsVersionType {
  latestVersion: string[];
}

export type LANE_TYPE = 'TOP' | 'JUG' | 'MID' | 'BOT' | 'SUP' | 'ALL';

export type ORDER_TYPE = 'NAME' | 'ID' | 'RECENTLY_SEARCHED';

export interface ChampionFilterType {
  lane: LANE_TYPE;
  query: string;
  order: ORDER_TYPE;
}

export interface ChampionImgInfo {
  full: number;
  sprite: number;
  group: number;
  x: number;
  y: number;
  w: number;
  h: number;
}

export interface ChampionSpecification {
  attack: number;
  defense: number;
  magic: number;
  difficulty: number;
}

export interface ChampionStat {
  hp: number;
  hpperlevel: number;
  mp: number;
  mpperlevel: number;
  movespeedd?: number;
  armor: number;
  armorperlevel: number;
  spellblock: number;
  spellblockperlevel: number;
  attackrange: number;
  hpregen: number;
  hpregenperlevel: number;
  mpregen: number;
  mpregenperlevel: number;
  crit: number;
  critperlevel: number;
  attackdamage: number;
  attackdamageperlevel: number;
  attackspeedperlevel: number;
  attackspeed: number;
}

export interface ChampionType {
  version: string;
  id: string;
  key: number;
  title: string;
  blurb: string;
  info: ChampionSpecification;
  image: ChampionImgInfo;
  tags: string[];
  partype: string;
  stats: ChampionStat;
}