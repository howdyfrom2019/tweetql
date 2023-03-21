import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ChampionsByTeam, ChampionType } from '../../type/type';
import { HYDRATE } from 'next-redux-wrapper';

const BannedSlice = createSlice({
  name: 'bans',
  initialState: { blue: [], red: [] } as ChampionsByTeam,
  reducers: {
    addBanBlue: (state, action: PayloadAction<ChampionType | null>) => {
      state.blue.push(action.payload);
    },
    addBanRed: (state, action: PayloadAction<ChampionType | null>) => {
      state.red.push(action.payload);
    },
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.bans,
      };
    },
  }
});

const { actions, reducer } = BannedSlice;

export const { addBanBlue, addBanRed } = actions;

export default reducer;
