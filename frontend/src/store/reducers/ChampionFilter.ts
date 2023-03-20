import { createSlice } from '@reduxjs/toolkit';
import { ChampionFilterType } from '@/type/type';
import { HYDRATE } from 'next-redux-wrapper';

const INITIAL_STATE: ChampionFilterType = { order: 'NAME', lane: 'ALL', query: '' };

const ChampionFilter = createSlice({
  name: 'champion/filtered',
  initialState: INITIAL_STATE,
  reducers: {
    changeLane: (state, action) => {
      state.lane = action.payload;
    },
    changeOrder: (state, action) => {
      state.order = action.payload;
    },
    changeQuery: (state, action) => {
      state.query = action.payload;
    },
    clear: () => INITIAL_STATE,
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload[`champion/filtered`],
      };
    },
  }
});

const { actions, reducer } = ChampionFilter;

export const { changeLane, changeOrder, changeQuery, clear } = actions;

export default reducer;
