import { combineReducers } from 'redux';
import Banned from './Banned';
import { ChampionsByTeam } from '../../type/type';

export interface RootStoredStateType {
  banned: ChampionsByTeam;
}

const rootReducer = combineReducers<RootStoredStateType>({
  banned: Banned
});

export default rootReducer;

