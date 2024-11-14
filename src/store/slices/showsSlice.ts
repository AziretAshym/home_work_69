import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import IShow from '../../types';
import { fetchShows, fetchOneShow } from '../thunks/shows/showsThunks.ts';

interface ShowState {
  shows: IShow[];
  fetchAllLoading: boolean;
  fetchOneShowLoading: boolean;
  selectedShow: IShow | null;
}

const initialState: ShowState = {
  shows: [],
  fetchAllLoading: false,
  fetchOneShowLoading: false,
  selectedShow: null,
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
      })
      .addCase(fetchShows.rejected, (state) => {
        state.fetchAllLoading = false;
      })

      .addCase(fetchOneShow.pending, (state) => {
        state.fetchOneShowLoading = true;
        state.selectedShow = null;
      })
      .addCase(fetchOneShow.fulfilled, (state, action: PayloadAction<IShow[]>) => {
        state.fetchOneShowLoading = false;
        state.selectedShow = action.payload;
      })
      .addCase(fetchOneShow.rejected, (state) => {
        state.fetchOneShowLoading = false;
      })


  },
});

export const showReducer = showSlice.reducer;
