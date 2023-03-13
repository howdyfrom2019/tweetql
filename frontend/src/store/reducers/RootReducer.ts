import { combineReducers } from 'redux';
import Banned from './Banned';
import { ChampionsByTeam } from '../../type/type';
import Picked from './Picked';

export interface RootStoredStateType {
  banned: ChampionsByTeam;
  picked: ChampionsByTeam;
}

const rootReducer = combineReducers<RootStoredStateType>({
  banned: Banned,
  picked: Picked,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;

