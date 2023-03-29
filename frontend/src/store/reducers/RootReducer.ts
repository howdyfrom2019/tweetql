import { combineReducers } from 'redux';
import Banned from '@/store/reducers/Banned';
import { ChampionFilterType, ChampionsByTeam } from '@/type/type';
import Picked from '@/store/reducers/Picked';
import ChampionFilter from '@/store/reducers/ChampionFilter';

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

