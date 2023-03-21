import { AnyAction, CombinedState, combineReducers } from 'redux';
import Banned from '@/store/reducers/Banned';
import { ChampionFilterType, ChampionsByTeam } from '@/type/type';
import Picked from '@/store/reducers/Picked';
import ChampionFilter from '@/store/reducers/ChampionFilter';
import { HYDRATE } from 'next-redux-wrapper';

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

// const rootReducer = (state: RootStoredStateType, action: AnyAction): CombinedState<RootStoredStateType> => {
//   switch (action.type) {
//     case HYDRATE:
//       return state;
//     default:
//       return combinedReducer(state, action);
//   }
// }

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;

