import { ApolloError } from '@apollo/client';

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

interface ChampionPassiveType {
  description: string;
  image: ChampionImgInfo;
}

interface ChampionSkinType {
  id: string;
  num: number;
  name: string;
  chromas: boolean;
}

interface LevelTipType {
  effect: string[];
  label: string[];
}

interface ChampionSpellType {
  cooldown: number[];
  cooldownBurn: string;
  cost: number[];
  costBurn: string;
  costType: string;
  description: string;
  effect: number | null[][];
  effectBurn: string | null[];
  leveltip: LevelTipType;
  id: string;
  image: ChampionImgInfo;
  maxammo: string;
  maxrank: number;
  range: number[];
  rangeBurn: string;
  resource: string;
  tooltip: string;
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

export interface ChampionSpecificType {
  allytips?: string[];
  blurb: string;
  enemyTips?: string[];
  id: string;
  image: ChampionImgInfo;
  info: ChampionSpecification;
  key: string;
  lore: string;
  name: string;
  partype: string;
  passive: ChampionPassiveType;
  recommend?: string[];
  skins: ChampionSkinType[];
  spells: ChampionSpellType[];
  stats: ChampionStat;
  tags: string[];
  title: string;
}

export interface DataState<T> {
  loading: boolean;
  error?: ApolloError;
  data?: T
}