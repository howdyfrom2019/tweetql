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