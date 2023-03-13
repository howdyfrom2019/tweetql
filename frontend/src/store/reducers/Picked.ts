import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ChampionsByTeam, ChampionType } from '../../type/type';

const PickedSlice = createSlice({
  name: 'picks',
  initialState: { blue: [], red: [] } as ChampionsByTeam,
  reducers: {
    addPickBlue: (state, action: PayloadAction<ChampionType | null>) => {
      state.blue.push(action.payload)
    },
    addPickRed: (state, action: PayloadAction<ChampionType | null>) => {
      state.red.push(action.payload)
    },
  }
});

const { actions, reducer } = PickedSlice;

export const { addPickBlue, addPickRed } = actions;

export default reducer;
