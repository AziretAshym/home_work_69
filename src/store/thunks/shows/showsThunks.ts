import { createAsyncThunk } from '@reduxjs/toolkit';
import { IShowApi } from '../../../types';
import axios from 'axios';


export const fetchShows = createAsyncThunk<IShowApi[], string>(
  'shows/fetchShows',
  async (value: string) => {
    const response = await axios(`http://api.tvmaze.com/search/shows?q=${value}`);
    return response.data.map((item: {show: IShowApi}) => item.show);
  }
);