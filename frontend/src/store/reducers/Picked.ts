import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ChampionsByTeam, ChampionType } from '@/type/type';
import { HYDRATE } from 'next-redux-wrapper';

const PickedSlice = createSlice({
  name: 'picks',
  initialState: { blue: [], red: [] } as ChampionsByTeam,
  reducers: {
    addPickBlue: (state, action: PayloadAction<ChampionType | null>) => {
      state.blue.push(action.payload);
    },
    addPickRed: (state, action: PayloadAction<ChampionType | null>) => {
      state.red.push(action.payload);
    },
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.picks,
      };
    },
  }
});

const { actions, reducer } = PickedSlice;

export const { addPickBlue, addPickRed } = actions;

export default reducer;
