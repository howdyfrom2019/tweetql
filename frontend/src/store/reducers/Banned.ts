import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ChampionsByTeam } from '../../type/type';

const BannedSlice = createSlice({
  name: 'bans',
  initialState: [] as (ChampionsByTeam | null)[],
  reducers: {
    addBannedChampion:  (state, action: PayloadAction<ChampionsByTeam | null>) => {
      state.push(action.payload)
    }
  }
});

const { actions, reducer } = BannedSlice;

export const { addBannedChampion } = actions;

export default reducer;
