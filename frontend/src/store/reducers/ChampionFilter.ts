import { createSlice } from '@reduxjs/toolkit';
import { ChampionFilterType } from '../../type/type';

const INITIAL_STATE: ChampionFilterType = { order: 'NAME', lane: 'ALL', query: '' };

const ChampionFilter = createSlice({
  name: 'champion/filtered',
  initialState: INITIAL_STATE,
  reducers: {
    changeLane: (state, action) =>  {
      state.lane = action.payload;
    },
    changeOrder: (state, action) => {
      state.order = action.payload;
    },
    changeQuery: (state, action) => {
      state.query = action.payload;
    },
    clear: () => INITIAL_STATE
  }
});

const { actions, reducer } = ChampionFilter;

export const { changeLane, changeOrder, changeQuery, clear } = actions;

export default reducer;
