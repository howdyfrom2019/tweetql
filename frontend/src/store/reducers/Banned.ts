import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ChampionsByTeam, ChampionType } from '../../type/type';

const BannedSlice = createSlice({
  name: 'bans',
  initialState: { blue: [], red: [] } as ChampionsByTeam,
  reducers: {
    addBlue: (state, action: PayloadAction<ChampionType | null>) => {
      state.blue.push(action.payload)
    },
    addRed: (state, action: PayloadAction<ChampionType | null>) => {
      state.red.push(action.payload)
    },
  }
});

const { actions, reducer } = BannedSlice;

export const { addBlue, addRed } = actions;

export default reducer;
