import { combineReducers } from 'redux';
import Banned from './Banned';
import { ChampionFilterType, ChampionsByTeam } from '../../type/type';
import Picked from './Picked';
import ChampionFilter from './ChampionFilter';

export interface RootStoredStateType {
  banned: ChampionsByTeam;
  picked: ChampionsByTeam;
  championFilter: ChampionFilterType;
}

const rootReducer = combineReducers<RootStoredStateType>({
  banned: Banned,
  picked: Picked,
  championFilter: ChampionFilter,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;

