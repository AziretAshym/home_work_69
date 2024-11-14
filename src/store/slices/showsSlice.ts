import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import IShow from '../../types';
import { fetchShows } from '../thunks/shows/showsThunks.ts';

interface ShowState {
  shows: IShow[];
  fetchAllLoading: boolean;
}

const initialState: ShowState = {
  shows: [],
  fetchAllLoading: false,
};

const showSlice = createSlice({
  name: 'show',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchShows.pending, (state) => {
        state.fetchAllLoading = true;
      })
      .addCase(fetchShows.fulfilled, (state, action: PayloadAction<IShow[]>) => {
        state.fetchAllLoading = false;
        state.shows = action.payload;
        console.log(action.payload);
      })
      .addCase(fetchShows.rejected, (state) => {
        state.fetchAllLoading = false;
      });
  },
});

export const showReducer = showSlice.reducer;
