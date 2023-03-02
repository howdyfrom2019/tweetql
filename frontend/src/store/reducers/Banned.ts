import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ChampionsByTeam, ChampionType } from '../../type/type';

const BannedSlice = createSlice({
  name: 'bans',
  initialState: { blue: [], red: [] } as ChampionsByTeam,
  reducers: {
    addBlueBanned: (state, action: PayloadAction<ChampionType | null>) => {
      state.blue.push(action.payload)
    },
    addRedBanned: (state, action: PayloadAction<ChampionType | null>) => {
      state.red.push(action.payload)
    },
  }
});

const { actions, reducer } = BannedSlice;

export const { addBlueBanned, addRedBanned } = actions;

export default reducer;
